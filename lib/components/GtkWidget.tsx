import React from "react";

import Reconciler, { FiberRoot } from "react-reconciler";

import Gtk from "gtk";

import { omitChildren, omitKeys } from "./filters";
import { _GtkContainerHost } from "./GtkContainer";

export interface GtkWidgetProps
  extends Partial<Gtk.Widget.ConstructorProperties> {}

export default function GtkWidget<Props = {}>(props: GtkWidgetProps & Props) {
  return <gtk-widget {...props} />;
}

export class _GtkWidgetHost<
  PublicProps extends GtkWidgetProps = GtkWidgetProps,
  GtkType extends Gtk.Widget = Gtk.Widget
> {
  public readonly instance: GtkType;

  private signalSource = new Map<string, number>();
  private signalCallback = new Map<string, (...args: any) => void>();

  get gtkWidgetClass(): { new (...args: any): GtkType } {
    // @ts-ignore: Unfortunately this is impossible to typecheck
    return Gtk.Widget;
  }

  sanitizeProps(
    props: PublicProps & { [key: string]: any }
  ): Partial<Gtk.Widget.ConstructorProperties> & { [key: string]: any } {
    return omitChildren(props);
  }

  constructor(props: PublicProps) {
    const instance = new this.gtkWidgetClass();
    this.instance = instance;
    this.updateProps(props, Object.keys(props) as Array<keyof PublicProps>, []);
  }

  updateProps(
    props: PublicProps,
    set: Array<keyof PublicProps>,
    unset: Array<keyof PublicProps>
  ) {
    const sanitizedProps = this.sanitizeProps(props);

    for (const [key, value] of Object.entries(sanitizedProps)) {
      if (key.startsWith("on")) {
        // Convert camelCase to kebab-case
        const signalName = key
          .slice(2)
          .replace(/([a-z][A-Z])/g, (group) => `${group[0]}-${group[1]}`)
          .toLowerCase();

        if (set.includes(key as keyof PublicProps)) {
          // cache the handler so we don't keep reconnecting
          if (!this.signalCallback.has(signalName)) {
            const handler = (...args: any[]) => {
              const callback = this.signalCallback.get(signalName);
              if (callback) callback(...args);
            };
            const sourceId = this.instance.connect(signalName, handler);
            // console.log(
            //   "connecting signalName: %s, sourceId: %d",
            //   signalName,
            //   sourceId
            // );
            this.signalSource.set(signalName, sourceId);
          }
          this.signalCallback.set(signalName, value);
        }
        if (unset.includes(key as keyof PublicProps)) {
          const sourceId = this.signalSource.get(signalName);
          // console.log(
          //   "disconnecting signalName: %s, sourceId: %d",
          //   signalName,
          //   sourceId
          // );
          if (sourceId) this.instance.disconnect(sourceId);
          this.signalCallback.delete(signalName);
        }
      } else {
        // @ts-ignore: Unfortunately this is impossible to typecheck
        this.instance[key] = value;
      }
    }
  }

  appendChild(child: _GtkWidgetHost) {
    throw new TypeError(
      `Can't append child ${child.gtkWidgetClass.name} to ${this.gtkWidgetClass.name}`
    );
  }

  insertBefore(child: _GtkWidgetHost, beforeChild: _GtkWidgetHost) {
    throw new TypeError(
      `Can't insert ${child.gtkWidgetClass.name} before ${beforeChild.gtkWidgetClass.name} inside ${this.gtkWidgetClass.name}`
    );
  }

  removeChild(child: _GtkWidgetHost) {
    throw new TypeError(
      `Can't remove child ${child.gtkWidgetClass.name} from ${this.gtkWidgetClass.name}`
    );
  }

  clearContainer() {
    throw new TypeError(
      `Can't remove all child from ${this.gtkWidgetClass.name}`
    );
  }
}

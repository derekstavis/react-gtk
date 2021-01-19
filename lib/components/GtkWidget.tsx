import React from "react";

import Gtk from "Gjs/Gtk-3.0";

import { omitChildren } from "./filters";
import { _GtkContainerHost } from "./GtkContainer";

export interface GtkWidgetProps extends Gtk.Widget_ConstructProps {}

export default function GtkWidget<Props = {}>(props: GtkWidgetProps & Props) {
  return <gtk-widget {...props} />;
}

export class _GtkWidgetHost<
  PublicProps = GtkWidgetProps,
  GtkType extends Gtk.Widget = Gtk.Widget
> {
  public readonly instance: GtkType;

  get gtkWidgetClass(): { new (...args: any): GtkType } {
    // @ts-ignore: Unfortunately this is impossible to typecheck
    return Gtk.Widget;
  }

  sanitizeProps(
    props: PublicProps & { [key: string]: any }
  ): Gtk.Widget_ConstructProps & { [key: string]: any } {
    return omitChildren(props);
  }

  constructor(props: PublicProps) {
    console.log({ props });
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
        const signalName = key.replace("on", "").toLowerCase();
        console.log("connecting signalName %s", signalName);
        this.instance.connect(signalName, value);
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

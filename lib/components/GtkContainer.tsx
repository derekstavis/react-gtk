import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";
import { _GtkPropWrapperHost } from "./GtkPropWrapper";

export interface GtkContainerProps
  extends Partial<Gtk.Container.ConstructorProperties> {
  children?: React.ReactNode;
}

export default function GtkContainer<Props = {}>(
  props: GtkContainerProps & Props
) {
  return <gtk-container {...props} />;
}

export class _GtkContainerHost<
  PublicProps = {},
  GtkType extends Gtk.Container = Gtk.Container
> extends _GtkWidgetHost<GtkContainerProps & PublicProps, GtkType> {
  get gtkWidgetClass(): { new (...args: any): GtkType } {
    // @ts-ignore: Unfortunately this is impossible to typecheck
    return Gtk.Container;
  }

  appendChild(child: _GtkWidgetHost | _GtkPropWrapperHost) {
    if (child instanceof _GtkPropWrapperHost) {
      return;
    }
    this.instance.add(child.instance);
  }

  removeChild(child: _GtkWidgetHost | _GtkPropWrapperHost) {
    if (child instanceof _GtkPropWrapperHost) {
      return;
    }
    this.instance.remove(child.instance);
  }

  clearContainer() {
    for (const child of this.instance.get_children()) {
      this.instance.remove(child);
    }
  }
}

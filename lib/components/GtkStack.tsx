import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkStackProps
  extends Partial<Gtk.Stack.ConstructorProperties> {}

export default function GtkStack(props: GtkStackProps) {
  return <gtk-stack {...props} />;
}

export class _GtkStackHost extends _GtkWidgetHost<GtkStackProps, Gtk.Stack> {
  get gtkWidgetClass() {
    return Gtk.Stack;
  }
}

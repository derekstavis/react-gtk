import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkScaleProps
  extends Partial<Gtk.Scale.ConstructorProperties> {}

export default function GtkScale(props: GtkScaleProps) {
  return <gtk-scale {...props} />;
}

export class _GtkScaleHost extends _GtkWidgetHost<GtkScaleProps, Gtk.Scale> {
  get gtkWidgetClass() {
    return Gtk.Scale;
  }
}

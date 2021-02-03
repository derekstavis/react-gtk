import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkFixedProps
  extends Partial<Gtk.Fixed.ConstructorProperties> {}

export default function GtkFixed(props: GtkFixedProps) {
  return <gtk-fixed {...props} />;
}

export class _GtkFixedHost extends _GtkWidgetHost<GtkFixedProps, Gtk.Fixed> {
  get gtkWidgetClass() {
    return Gtk.Fixed;
  }
}

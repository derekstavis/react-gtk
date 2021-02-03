import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkLabelProps
  extends Partial<Gtk.Label.ConstructorProperties> {}

export default function GtkLabel(props: GtkLabelProps) {
  return <gtk-label {...props} />;
}

export class _GtkLabelHost extends _GtkWidgetHost<GtkLabelProps, Gtk.Label> {
  get gtkWidgetClass() {
    return Gtk.Label;
  }
}

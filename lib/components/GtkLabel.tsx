import React from "react";

import Gtk from "Gjs/Gtk-3.0";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkLabelProps extends Gtk.Label_ConstructProps {}

export default function GtkLabel(props: GtkLabelProps) {
  return <gtk-label {...props} />;
}

export class _GtkLabelHost extends _GtkWidgetHost<
  Gtk.Label,
  Gtk.Label_ConstructProps,
  GtkLabelProps
> {
  get gtkWidgetClass() {
    return Gtk.Label;
  }
}

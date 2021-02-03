import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkVSeparatorProps
  extends Partial<Gtk.VSeparator.ConstructorProperties> {}

export default function GtkVSeparator(props: GtkVSeparatorProps) {
  return <gtk-vseparator {...props} />;
}

export class _GtkVSeparatorHost extends _GtkWidgetHost<GtkVSeparatorProps, Gtk.VSeparator> {
  get gtkWidgetClass() {
    return Gtk.VSeparator;
  }
}

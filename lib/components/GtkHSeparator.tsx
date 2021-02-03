import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkHSeparatorProps
  extends Partial<Gtk.HSeparator.ConstructorProperties> {}

export default function GtkHSeparator(props: GtkHSeparatorProps) {
  return <gtk-hseparator {...props} />;
}

export class _GtkHSeparatorHost extends _GtkWidgetHost<GtkHSeparatorProps, Gtk.HSeparator> {
  get gtkWidgetClass() {
    return Gtk.HSeparator;
  }
}

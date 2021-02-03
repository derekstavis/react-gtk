import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkSeparatorProps
  extends Partial<Gtk.Separator.ConstructorProperties> {}

export default function GtkSeparator(props: GtkSeparatorProps) {
  return <gtk-separator {...props} />;
}

export class _GtkSeparatorHost extends _GtkWidgetHost<GtkSeparatorProps, Gtk.Separator> {
  get gtkWidgetClass() {
    return Gtk.Separator;
  }
}

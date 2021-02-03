import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkCellRendererAccelProps
  extends Partial<Gtk.CellRendererAccel.ConstructorProperties> {}

export default function GtkCellRendererAccel(props: GtkCellRendererAccelProps) {
  return <gtk-cellrendereraccel {...props} />;
}

export class _GtkCellRendererAccelHost extends _GtkWidgetHost<GtkCellRendererAccelProps, Gtk.CellRendererAccel> {
  get gtkWidgetClass() {
    return Gtk.CellRendererAccel;
  }
}

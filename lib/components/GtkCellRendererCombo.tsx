import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkCellRendererComboProps
  extends Partial<Gtk.CellRendererCombo.ConstructorProperties> {}

export default function GtkCellRendererCombo(props: GtkCellRendererComboProps) {
  return <gtk-cellrenderercombo {...props} />;
}

export class _GtkCellRendererComboHost extends _GtkWidgetHost<GtkCellRendererComboProps, Gtk.CellRendererCombo> {
  get gtkWidgetClass() {
    return Gtk.CellRendererCombo;
  }
}

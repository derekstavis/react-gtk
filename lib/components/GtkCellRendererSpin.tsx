import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkCellRendererSpinProps
  extends Partial<Gtk.CellRendererSpin.ConstructorProperties> {}

export default function GtkCellRendererSpin(props: GtkCellRendererSpinProps) {
  return <gtk-cellrendererspin {...props} />;
}

export class _GtkCellRendererSpinHost extends _GtkWidgetHost<GtkCellRendererSpinProps, Gtk.CellRendererSpin> {
  get gtkWidgetClass() {
    return Gtk.CellRendererSpin;
  }
}

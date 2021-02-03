import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkCellRendererSpinnerProps
  extends Partial<Gtk.CellRendererSpinner.ConstructorProperties> {}

export default function GtkCellRendererSpinner(props: GtkCellRendererSpinnerProps) {
  return <gtk-cellrendererspinner {...props} />;
}

export class _GtkCellRendererSpinnerHost extends _GtkWidgetHost<GtkCellRendererSpinnerProps, Gtk.CellRendererSpinner> {
  get gtkWidgetClass() {
    return Gtk.CellRendererSpinner;
  }
}

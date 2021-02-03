import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkCellRendererProgressProps
  extends Partial<Gtk.CellRendererProgress.ConstructorProperties> {}

export default function GtkCellRendererProgress(props: GtkCellRendererProgressProps) {
  return <gtk-cellrendererprogress {...props} />;
}

export class _GtkCellRendererProgressHost extends _GtkWidgetHost<GtkCellRendererProgressProps, Gtk.CellRendererProgress> {
  get gtkWidgetClass() {
    return Gtk.CellRendererProgress;
  }
}

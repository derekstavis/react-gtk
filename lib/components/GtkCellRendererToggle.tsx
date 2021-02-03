import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkCellRendererToggleProps
  extends Partial<Gtk.CellRendererToggle.ConstructorProperties> {}

export default function GtkCellRendererToggle(props: GtkCellRendererToggleProps) {
  return <gtk-cellrenderertoggle {...props} />;
}

export class _GtkCellRendererToggleHost extends _GtkWidgetHost<GtkCellRendererToggleProps, Gtk.CellRendererToggle> {
  get gtkWidgetClass() {
    return Gtk.CellRendererToggle;
  }
}

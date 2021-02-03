import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkGridProps
  extends Partial<Gtk.Grid.ConstructorProperties> {}

export default function GtkGrid(props: GtkGridProps) {
  return <gtk-grid {...props} />;
}

export class _GtkGridHost extends _GtkWidgetHost<GtkGridProps, Gtk.Grid> {
  get gtkWidgetClass() {
    return Gtk.Grid;
  }
}

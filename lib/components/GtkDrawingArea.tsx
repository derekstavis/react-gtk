import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkDrawingAreaProps
  extends Partial<Gtk.DrawingArea.ConstructorProperties> {}

export default function GtkDrawingArea(props: GtkDrawingAreaProps) {
  return <gtk-drawingarea {...props} />;
}

export class _GtkDrawingAreaHost extends _GtkWidgetHost<GtkDrawingAreaProps, Gtk.DrawingArea> {
  get gtkWidgetClass() {
    return Gtk.DrawingArea;
  }
}

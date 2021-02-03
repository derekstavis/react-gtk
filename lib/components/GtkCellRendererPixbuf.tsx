import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkCellRendererPixbufProps
  extends Partial<Gtk.CellRendererPixbuf.ConstructorProperties> {}

export default function GtkCellRendererPixbuf(props: GtkCellRendererPixbufProps) {
  return <gtk-cellrendererpixbuf {...props} />;
}

export class _GtkCellRendererPixbufHost extends _GtkWidgetHost<GtkCellRendererPixbufProps, Gtk.CellRendererPixbuf> {
  get gtkWidgetClass() {
    return Gtk.CellRendererPixbuf;
  }
}

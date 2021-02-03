import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkScrolledWindowProps
  extends Partial<Gtk.ScrolledWindow.ConstructorProperties> {}

export default function GtkScrolledWindow(props: GtkScrolledWindowProps) {
  return <gtk-scrolledwindow {...props} />;
}

export class _GtkScrolledWindowHost extends _GtkWidgetHost<GtkScrolledWindowProps, Gtk.ScrolledWindow> {
  get gtkWidgetClass() {
    return Gtk.ScrolledWindow;
  }
}

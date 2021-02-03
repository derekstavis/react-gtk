import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkGLAreaProps
  extends Partial<Gtk.GLArea.ConstructorProperties> {}

export default function GtkGLArea(props: GtkGLAreaProps) {
  return <gtk-glarea {...props} />;
}

export class _GtkGLAreaHost extends _GtkWidgetHost<GtkGLAreaProps, Gtk.GLArea> {
  get gtkWidgetClass() {
    return Gtk.GLArea;
  }
}

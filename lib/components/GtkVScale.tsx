import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkVScaleProps
  extends Partial<Gtk.VScale.ConstructorProperties> {}

export default function GtkVScale(props: GtkVScaleProps) {
  return <gtk-vscale {...props} />;
}

export class _GtkVScaleHost extends _GtkWidgetHost<GtkVScaleProps, Gtk.VScale> {
  get gtkWidgetClass() {
    return Gtk.VScale;
  }
}

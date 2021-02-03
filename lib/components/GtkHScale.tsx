import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkHScaleProps
  extends Partial<Gtk.HScale.ConstructorProperties> {}

export default function GtkHScale(props: GtkHScaleProps) {
  return <gtk-hscale {...props} />;
}

export class _GtkHScaleHost extends _GtkWidgetHost<GtkHScaleProps, Gtk.HScale> {
  get gtkWidgetClass() {
    return Gtk.HScale;
  }
}

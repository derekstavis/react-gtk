import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkAdjustmentProps
  extends Partial<Gtk.Adjustment.ConstructorProperties> {}

export default function GtkAdjustment(props: GtkAdjustmentProps) {
  return <gtk-adjustment {...props} />;
}

export class _GtkAdjustmentHost extends _GtkWidgetHost<GtkAdjustmentProps, Gtk.Adjustment> {
  get gtkWidgetClass() {
    return Gtk.Adjustment;
  }
}

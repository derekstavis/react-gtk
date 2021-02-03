import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkFlowBoxProps
  extends Partial<Gtk.FlowBox.ConstructorProperties> {}

export default function GtkFlowBox(props: GtkFlowBoxProps) {
  return <gtk-flowbox {...props} />;
}

export class _GtkFlowBoxHost extends _GtkWidgetHost<GtkFlowBoxProps, Gtk.FlowBox> {
  get gtkWidgetClass() {
    return Gtk.FlowBox;
  }
}

import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkHeaderBarProps extends Gtk.HeaderBar.ConstructorProperties {}

export default function GtkHeaderBar(props: GtkHeaderBarProps) {
  return <gtk-headerbar {...props} />;
}

export class _GtkHeaderBarHost extends _GtkWidgetHost<GtkHeaderBarProps> {
  get gtkWidgetClass() {
    return Gtk.HeaderBar;
  }
}

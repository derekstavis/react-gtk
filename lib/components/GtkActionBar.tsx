import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkActionBarProps
  extends Partial<Gtk.ActionBar.ConstructorProperties> {}

export default function GtkActionBar(props: GtkActionBarProps) {
  return <gtk-actionbar {...props} />;
}

export class _GtkActionBarHost extends _GtkWidgetHost<GtkActionBarProps, Gtk.ActionBar> {
  get gtkWidgetClass() {
    return Gtk.ActionBar;
  }
}

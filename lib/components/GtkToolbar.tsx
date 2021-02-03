import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkToolbarProps
  extends Partial<Gtk.Toolbar.ConstructorProperties> {}

export default function GtkToolbar(props: GtkToolbarProps) {
  return <gtk-toolbar {...props} />;
}

export class _GtkToolbarHost extends _GtkWidgetHost<GtkToolbarProps, Gtk.Toolbar> {
  get gtkWidgetClass() {
    return Gtk.Toolbar;
  }
}

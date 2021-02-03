import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkMenuBarProps
  extends Partial<Gtk.MenuBar.ConstructorProperties> {}

export default function GtkMenuBar(props: GtkMenuBarProps) {
  return <gtk-menubar {...props} />;
}

export class _GtkMenuBarHost extends _GtkWidgetHost<GtkMenuBarProps, Gtk.MenuBar> {
  get gtkWidgetClass() {
    return Gtk.MenuBar;
  }
}

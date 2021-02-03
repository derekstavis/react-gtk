import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkLevelBarProps
  extends Partial<Gtk.LevelBar.ConstructorProperties> {}

export default function GtkLevelBar(props: GtkLevelBarProps) {
  return <gtk-levelbar {...props} />;
}

export class _GtkLevelBarHost extends _GtkWidgetHost<GtkLevelBarProps, Gtk.LevelBar> {
  get gtkWidgetClass() {
    return Gtk.LevelBar;
  }
}

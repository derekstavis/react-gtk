import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkToolPaletteProps
  extends Partial<Gtk.ToolPalette.ConstructorProperties> {}

export default function GtkToolPalette(props: GtkToolPaletteProps) {
  return <gtk-toolpalette {...props} />;
}

export class _GtkToolPaletteHost extends _GtkWidgetHost<GtkToolPaletteProps, Gtk.ToolPalette> {
  get gtkWidgetClass() {
    return Gtk.ToolPalette;
  }
}

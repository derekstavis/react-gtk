import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkStatusbarProps
  extends Partial<Gtk.Statusbar.ConstructorProperties> {}

export default function GtkStatusbar(props: GtkStatusbarProps) {
  return <gtk-statusbar {...props} />;
}

export class _GtkStatusbarHost extends _GtkWidgetHost<GtkStatusbarProps, Gtk.Statusbar> {
  get gtkWidgetClass() {
    return Gtk.Statusbar;
  }
}

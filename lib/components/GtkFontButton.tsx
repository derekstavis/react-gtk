import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkFontButtonProps
  extends Partial<Gtk.FontButton.ConstructorProperties> {}

export default function GtkFontButton(props: GtkFontButtonProps) {
  return <gtk-fontbutton {...props} />;
}

export class _GtkFontButtonHost extends _GtkWidgetHost<GtkFontButtonProps, Gtk.FontButton> {
  get gtkWidgetClass() {
    return Gtk.FontButton;
  }
}

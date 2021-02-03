import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkColorButtonProps
  extends Partial<Gtk.ColorButton.ConstructorProperties> {}

export default function GtkColorButton(props: GtkColorButtonProps) {
  return <gtk-colorbutton {...props} />;
}

export class _GtkColorButtonHost extends _GtkWidgetHost<GtkColorButtonProps, Gtk.ColorButton> {
  get gtkWidgetClass() {
    return Gtk.ColorButton;
  }
}

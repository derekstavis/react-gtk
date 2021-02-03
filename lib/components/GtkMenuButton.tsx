import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkMenuButtonProps
  extends Partial<Gtk.MenuButton.ConstructorProperties> {}

export default function GtkMenuButton(props: GtkMenuButtonProps) {
  return <gtk-menubutton {...props} />;
}

export class _GtkMenuButtonHost extends _GtkWidgetHost<GtkMenuButtonProps, Gtk.MenuButton> {
  get gtkWidgetClass() {
    return Gtk.MenuButton;
  }
}

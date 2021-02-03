import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkToggleButtonProps
  extends Partial<Gtk.ToggleButton.ConstructorProperties> {}

export default function GtkToggleButton(props: GtkToggleButtonProps) {
  return <gtk-togglebutton {...props} />;
}

export class _GtkToggleButtonHost extends _GtkWidgetHost<GtkToggleButtonProps, Gtk.ToggleButton> {
  get gtkWidgetClass() {
    return Gtk.ToggleButton;
  }
}

import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkSpinButtonProps
  extends Partial<Gtk.SpinButton.ConstructorProperties> {}

export default function GtkSpinButton(props: GtkSpinButtonProps) {
  return <gtk-spinbutton {...props} />;
}

export class _GtkSpinButtonHost extends _GtkWidgetHost<GtkSpinButtonProps, Gtk.SpinButton> {
  get gtkWidgetClass() {
    return Gtk.SpinButton;
  }
}

import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkRadioButtonProps
  extends Partial<Gtk.RadioButton.ConstructorProperties> {}

export default function GtkRadioButton(props: GtkRadioButtonProps) {
  return <gtk-radiobutton {...props} />;
}

export class _GtkRadioButtonHost extends _GtkWidgetHost<GtkRadioButtonProps, Gtk.RadioButton> {
  get gtkWidgetClass() {
    return Gtk.RadioButton;
  }
}

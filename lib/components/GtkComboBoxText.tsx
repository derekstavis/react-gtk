import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkComboBoxTextProps
  extends Partial<Gtk.ComboBoxText.ConstructorProperties> {}

export default function GtkComboBoxText(props: GtkComboBoxTextProps) {
  return <gtk-comboboxtext {...props} />;
}

export class _GtkComboBoxTextHost extends _GtkWidgetHost<GtkComboBoxTextProps, Gtk.ComboBoxText> {
  get gtkWidgetClass() {
    return Gtk.ComboBoxText;
  }
}

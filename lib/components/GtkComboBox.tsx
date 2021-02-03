import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkComboBoxProps
  extends Partial<Gtk.ComboBox.ConstructorProperties> {}

export default function GtkComboBox(props: GtkComboBoxProps) {
  return <gtk-combobox {...props} />;
}

export class _GtkComboBoxHost extends _GtkWidgetHost<GtkComboBoxProps, Gtk.ComboBox> {
  get gtkWidgetClass() {
    return Gtk.ComboBox;
  }
}

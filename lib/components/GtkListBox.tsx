import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkListBoxProps
  extends Partial<Gtk.ListBox.ConstructorProperties> {}

export default function GtkListBox(props: GtkListBoxProps) {
  return <gtk-listbox {...props} />;
}

export class _GtkListBoxHost extends _GtkWidgetHost<GtkListBoxProps, Gtk.ListBox> {
  get gtkWidgetClass() {
    return Gtk.ListBox;
  }
}

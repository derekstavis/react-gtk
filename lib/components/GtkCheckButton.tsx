import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkCheckButtonProps
  extends Partial<Gtk.CheckButton.ConstructorProperties> {}

export default function GtkCheckButton(props: GtkCheckButtonProps) {
  return <gtk-checkbutton {...props} />;
}

export class _GtkCheckButtonHost extends _GtkWidgetHost<GtkCheckButtonProps, Gtk.CheckButton> {
  get gtkWidgetClass() {
    return Gtk.CheckButton;
  }
}

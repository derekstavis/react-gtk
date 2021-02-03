import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkFileChooserButtonProps
  extends Partial<Gtk.FileChooserButton.ConstructorProperties> {}

export default function GtkFileChooserButton(props: GtkFileChooserButtonProps) {
  return <gtk-filechooserbutton {...props} />;
}

export class _GtkFileChooserButtonHost extends _GtkWidgetHost<GtkFileChooserButtonProps, Gtk.FileChooserButton> {
  get gtkWidgetClass() {
    return Gtk.FileChooserButton;
  }
}

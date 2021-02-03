import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkAppChooserButtonProps
  extends Partial<Gtk.AppChooserButton.ConstructorProperties> {}

export default function GtkAppChooserButton(props: GtkAppChooserButtonProps) {
  return <gtk-appchooserbutton {...props} />;
}

export class _GtkAppChooserButtonHost extends _GtkWidgetHost<GtkAppChooserButtonProps, Gtk.AppChooserButton> {
  get gtkWidgetClass() {
    return Gtk.AppChooserButton;
  }
}

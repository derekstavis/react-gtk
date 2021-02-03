import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkButtonProps
  extends Partial<Gtk.Button.ConstructorProperties> {
  onClicked?: () => void;
}

export default function GtkButton(props: GtkButtonProps) {
  return <gtk-button {...props} />;
}

export class _GtkButtonHost extends _GtkWidgetHost<GtkButtonProps> {
  get gtkWidgetClass() {
    return Gtk.Button;
  }
}

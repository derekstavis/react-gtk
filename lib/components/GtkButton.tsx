import React from "react";

import Gtk from "Gjs/Gtk-3.0";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkButtonProps extends Gtk.Button_ConstructProps {
  onClicked: () => void;
}

export default function GtkButton(props: GtkButtonProps) {
  return <gtk-button {...props} />;
}

export class _GtkButtonHost extends _GtkWidgetHost<GtkButtonProps> {
  get gtkWidgetClass() {
    return Gtk.Button;
  }
}

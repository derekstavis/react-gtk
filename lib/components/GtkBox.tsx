import React from "react";

import Gtk from "Gjs/Gtk-3.0";

import { GtkContainerProps, _GtkContainerHost } from "./GtkContainer";

export interface GtkBoxProps extends Gtk.Box_ConstructProps {}

export default function GtkBox(props: GtkBoxProps & GtkContainerProps) {
  return <gtk-box {...props} />;
}

export class _GtkBoxHost extends _GtkContainerHost<GtkBoxProps, Gtk.Box> {
  get gtkWidgetClass() {
    return Gtk.Box;
  }
}

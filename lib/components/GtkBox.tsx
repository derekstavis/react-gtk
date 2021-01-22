import React from "react";

import Gtk from "gtk";

import { GtkContainerProps, _GtkContainerHost } from "./GtkContainer";

export interface GtkBoxProps
  extends Partial<Gtk.Window.ConstructorProperties> {}

export default function GtkBox(props: GtkBoxProps & GtkContainerProps) {
  return <gtk-box {...props} />;
}

export class _GtkBoxHost extends _GtkContainerHost<GtkBoxProps, Gtk.Box> {
  get gtkWidgetClass() {
    return Gtk.Box;
  }
}

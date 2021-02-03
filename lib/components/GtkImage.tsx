import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkImageProps
  extends Partial<Gtk.Image.ConstructorProperties> {}

export default function GtkImage(props: GtkImageProps) {
  return <gtk-image {...props} />;
}

export class _GtkImageHost extends _GtkWidgetHost<GtkImageProps, Gtk.Image> {
  get gtkWidgetClass() {
    return Gtk.Image;
  }
}

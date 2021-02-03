import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkSizeGroupProps
  extends Partial<Gtk.SizeGroup.ConstructorProperties> {}

export default function GtkSizeGroup(props: GtkSizeGroupProps) {
  return <gtk-sizegroup {...props} />;
}

export class _GtkSizeGroupHost extends _GtkWidgetHost<GtkSizeGroupProps, Gtk.SizeGroup> {
  get gtkWidgetClass() {
    return Gtk.SizeGroup;
  }
}

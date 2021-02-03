import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkPanedProps
  extends Partial<Gtk.Paned.ConstructorProperties> {}

export default function GtkPaned(props: GtkPanedProps) {
  return <gtk-paned {...props} />;
}

export class _GtkPanedHost extends _GtkWidgetHost<GtkPanedProps, Gtk.Paned> {
  get gtkWidgetClass() {
    return Gtk.Paned;
  }
}

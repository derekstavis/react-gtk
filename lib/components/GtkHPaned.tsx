import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkHPanedProps
  extends Partial<Gtk.HPaned.ConstructorProperties> {}

export default function GtkHPaned(props: GtkHPanedProps) {
  return <gtk-hpaned {...props} />;
}

export class _GtkHPanedHost extends _GtkWidgetHost<GtkHPanedProps, Gtk.HPaned> {
  get gtkWidgetClass() {
    return Gtk.HPaned;
  }
}

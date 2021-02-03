import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkVPanedProps
  extends Partial<Gtk.VPaned.ConstructorProperties> {}

export default function GtkVPaned(props: GtkVPanedProps) {
  return <gtk-vpaned {...props} />;
}

export class _GtkVPanedHost extends _GtkWidgetHost<GtkVPanedProps, Gtk.VPaned> {
  get gtkWidgetClass() {
    return Gtk.VPaned;
  }
}

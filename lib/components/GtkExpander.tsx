import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkExpanderProps
  extends Partial<Gtk.Expander.ConstructorProperties> {}

export default function GtkExpander(props: GtkExpanderProps) {
  return <gtk-expander {...props} />;
}

export class _GtkExpanderHost extends _GtkWidgetHost<GtkExpanderProps, Gtk.Expander> {
  get gtkWidgetClass() {
    return Gtk.Expander;
  }
}

import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkIconViewProps
  extends Partial<Gtk.IconView.ConstructorProperties> {}

export default function GtkIconView(props: GtkIconViewProps) {
  return <gtk-iconview {...props} />;
}

export class _GtkIconViewHost extends _GtkWidgetHost<GtkIconViewProps, Gtk.IconView> {
  get gtkWidgetClass() {
    return Gtk.IconView;
  }
}

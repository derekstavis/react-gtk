import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkInfoBarProps
  extends Partial<Gtk.InfoBar.ConstructorProperties> {}

export default function GtkInfoBar(props: GtkInfoBarProps) {
  return <gtk-infobar {...props} />;
}

export class _GtkInfoBarHost extends _GtkWidgetHost<GtkInfoBarProps, Gtk.InfoBar> {
  get gtkWidgetClass() {
    return Gtk.InfoBar;
  }
}

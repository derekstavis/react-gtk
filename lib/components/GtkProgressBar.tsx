import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkProgressBarProps
  extends Partial<Gtk.ProgressBar.ConstructorProperties> {}

export default function GtkProgressBar(props: GtkProgressBarProps) {
  return <gtk-progressbar {...props} />;
}

export class _GtkProgressBarHost extends _GtkWidgetHost<GtkProgressBarProps, Gtk.ProgressBar> {
  get gtkWidgetClass() {
    return Gtk.ProgressBar;
  }
}

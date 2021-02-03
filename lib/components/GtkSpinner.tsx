import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkSpinnerProps
  extends Partial<Gtk.Spinner.ConstructorProperties> {}

export default function GtkSpinner(props: GtkSpinnerProps) {
  return <gtk-spinner {...props} />;
}

export class _GtkSpinnerHost extends _GtkWidgetHost<GtkSpinnerProps, Gtk.Spinner> {
  get gtkWidgetClass() {
    return Gtk.Spinner;
  }
}

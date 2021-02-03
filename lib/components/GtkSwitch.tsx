import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkSwitchProps
  extends Partial<Gtk.Switch.ConstructorProperties> {}

export default function GtkSwitch(props: GtkSwitchProps) {
  return <gtk-switch {...props} />;
}

export class _GtkSwitchHost extends _GtkWidgetHost<GtkSwitchProps, Gtk.Switch> {
  get gtkWidgetClass() {
    return Gtk.Switch;
  }
}

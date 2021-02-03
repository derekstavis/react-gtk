import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkStackSwitcherProps
  extends Partial<Gtk.StackSwitcher.ConstructorProperties> {}

export default function GtkStackSwitcher(props: GtkStackSwitcherProps) {
  return <gtk-stackswitcher {...props} />;
}

export class _GtkStackSwitcherHost extends _GtkWidgetHost<GtkStackSwitcherProps, Gtk.StackSwitcher> {
  get gtkWidgetClass() {
    return Gtk.StackSwitcher;
  }
}

import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkStackSidebarProps
  extends Partial<Gtk.StackSidebar.ConstructorProperties> {}

export default function GtkStackSidebar(props: GtkStackSidebarProps) {
  return <gtk-stacksidebar {...props} />;
}

export class _GtkStackSidebarHost extends _GtkWidgetHost<GtkStackSidebarProps, Gtk.StackSidebar> {
  get gtkWidgetClass() {
    return Gtk.StackSidebar;
  }
}

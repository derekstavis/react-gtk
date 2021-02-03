import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkPlacesSidebarProps
  extends Partial<Gtk.PlacesSidebar.ConstructorProperties> {}

export default function GtkPlacesSidebar(props: GtkPlacesSidebarProps) {
  return <gtk-placessidebar {...props} />;
}

export class _GtkPlacesSidebarHost extends _GtkWidgetHost<GtkPlacesSidebarProps, Gtk.PlacesSidebar> {
  get gtkWidgetClass() {
    return Gtk.PlacesSidebar;
  }
}

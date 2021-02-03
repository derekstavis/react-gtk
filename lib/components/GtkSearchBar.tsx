import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkSearchBarProps
  extends Partial<Gtk.SearchBar.ConstructorProperties> {}

export default function GtkSearchBar(props: GtkSearchBarProps) {
  return <gtk-searchbar {...props} />;
}

export class _GtkSearchBarHost extends _GtkWidgetHost<GtkSearchBarProps, Gtk.SearchBar> {
  get gtkWidgetClass() {
    return Gtk.SearchBar;
  }
}

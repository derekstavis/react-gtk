import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkEntryProps
  extends Partial<Gtk.Entry.ConstructorProperties> {
  onChanged: (entry: Gtk.Entry) => void;
}

export default function GtkEntry(props: GtkEntryProps) {
  return <gtk-entry {...props} />;
}

export class _GtkEntryHost extends _GtkWidgetHost<GtkEntryProps> {
  get gtkWidgetClass() {
    return Gtk.Entry;
  }
}

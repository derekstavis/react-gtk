import React from "react";

import Gtk from "Gjs/Gtk-3.0";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkEntryProps extends Gtk.Entry_ConstructProps {
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

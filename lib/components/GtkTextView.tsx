import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkTextViewProps
  extends Partial<Gtk.TextView.ConstructorProperties> {}

export default function GtkTextView(props: GtkTextViewProps) {
  return <gtk-textview {...props} />;
}

export class _GtkTextViewHost extends _GtkWidgetHost<GtkTextViewProps, Gtk.TextView> {
  get gtkWidgetClass() {
    return Gtk.TextView;
  }
}

import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkNotebookProps
  extends Partial<Gtk.Notebook.ConstructorProperties> {}

export default function GtkNotebook(props: GtkNotebookProps) {
  return <gtk-notebook {...props} />;
}

export class _GtkNotebookHost extends _GtkWidgetHost<GtkNotebookProps, Gtk.Notebook> {
  get gtkWidgetClass() {
    return Gtk.Notebook;
  }
}

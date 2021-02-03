import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkBinProps
  extends Partial<Gtk.Bin.ConstructorProperties> {}

export default function GtkBin(props: GtkBinProps) {
  return <gtk-bin {...props} />;
}

export class _GtkBinHost extends _GtkWidgetHost<GtkBinProps, Gtk.Bin> {
  get gtkWidgetClass() {
    return Gtk.Bin;
  }
}

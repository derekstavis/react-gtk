import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkFrameProps
  extends Partial<Gtk.Frame.ConstructorProperties> {}

export default function GtkFrame(props: GtkFrameProps) {
  return <gtk-frame {...props} />;
}

export class _GtkFrameHost extends _GtkWidgetHost<GtkFrameProps, Gtk.Frame> {
  get gtkWidgetClass() {
    return Gtk.Frame;
  }
}

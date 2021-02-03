import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkOverlayProps
  extends Partial<Gtk.Overlay.ConstructorProperties> {}

export default function GtkOverlay(props: GtkOverlayProps) {
  return <gtk-overlay {...props} />;
}

export class _GtkOverlayHost extends _GtkWidgetHost<GtkOverlayProps, Gtk.Overlay> {
  get gtkWidgetClass() {
    return Gtk.Overlay;
  }
}

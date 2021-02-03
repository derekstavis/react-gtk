import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkRevealerProps
  extends Partial<Gtk.Revealer.ConstructorProperties> {}

export default function GtkRevealer(props: GtkRevealerProps) {
  return <gtk-revealer {...props} />;
}

export class _GtkRevealerHost extends _GtkWidgetHost<GtkRevealerProps, Gtk.Revealer> {
  get gtkWidgetClass() {
    return Gtk.Revealer;
  }
}

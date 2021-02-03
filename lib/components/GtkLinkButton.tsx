import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkLinkButtonProps
  extends Partial<Gtk.LinkButton.ConstructorProperties> {}

export default function GtkLinkButton(props: GtkLinkButtonProps) {
  return <gtk-linkbutton {...props} />;
}

export class _GtkLinkButtonHost extends _GtkWidgetHost<GtkLinkButtonProps, Gtk.LinkButton> {
  get gtkWidgetClass() {
    return Gtk.LinkButton;
  }
}

import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkLockButtonProps
  extends Partial<Gtk.LockButton.ConstructorProperties> {}

export default function GtkLockButton(props: GtkLockButtonProps) {
  return <gtk-lockbutton {...props} />;
}

export class _GtkLockButtonHost extends _GtkWidgetHost<GtkLockButtonProps, Gtk.LockButton> {
  get gtkWidgetClass() {
    return Gtk.LockButton;
  }
}

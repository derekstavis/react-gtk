import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkVolumeButtonProps
  extends Partial<Gtk.VolumeButton.ConstructorProperties> {}

export default function GtkVolumeButton(props: GtkVolumeButtonProps) {
  return <gtk-volumebutton {...props} />;
}

export class _GtkVolumeButtonHost extends _GtkWidgetHost<GtkVolumeButtonProps, Gtk.VolumeButton> {
  get gtkWidgetClass() {
    return Gtk.VolumeButton;
  }
}

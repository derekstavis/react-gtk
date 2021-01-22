import React from "react";

import Gtk from "gtk";

import { _GtkContainerHost } from "./GtkContainer";

export interface GtkWindowProps extends Gtk.Window.ConstructorProperties {
  children?: React.ReactNode;
  titlebar?: React.ReactNode;
  onDestroy?: (window: Gtk.Window) => void;
}

export default function GtkWindow(props: Partial<GtkWindowProps>) {
  return <gtk-window {...props} />;
}

export class _GtkWindowHost extends _GtkContainerHost<
  GtkWindowProps,
  Gtk.Window
> {
  get gtkWidgetClass() {
    return Gtk.Window;
  }

  constructor(props: GtkWindowProps) {
    super(props);
  }

  sanitizeProps(
    props: GtkWindowProps
  ): Partial<Gtk.Window.ConstructorProperties> {
    const { headerbar: _, ...rest } = super.sanitizeProps(props);
    return rest;
  }
}

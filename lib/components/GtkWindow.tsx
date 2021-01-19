import React from "react";

import Gtk from "Gjs/Gtk-3.0";

import { _GtkContainerHost } from "./GtkContainer";

export interface GtkWindowProps extends Gtk.Window_ConstructProps {
  children?: React.ReactNode;
  titlebar?: React.ReactNode;
}

export default function GtkWindow(props: GtkWindowProps) {
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

  sanitizeProps(props: GtkWindowProps): Gtk.Window_ConstructProps {
    const { headerbar: _, ...rest } = super.sanitizeProps(props);
    return rest;
  }
}

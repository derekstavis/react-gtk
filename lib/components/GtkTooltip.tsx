import React from "react";

import Gtk from "gtk";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkTooltipProps
  extends Partial<Gtk.Tooltip.ConstructorProperties> {}

export default function GtkTooltip(props: GtkTooltipProps) {
  return <gtk-tooltip {...props} />;
}

export class _GtkTooltipHost extends _GtkWidgetHost<GtkTooltipProps, Gtk.Tooltip> {
  get gtkWidgetClass() {
    return Gtk.Tooltip;
  }
}

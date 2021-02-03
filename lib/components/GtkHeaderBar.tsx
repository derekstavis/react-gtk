import React from "react";

import Gtk from "gtk";

import { _GtkContainerHost } from "./GtkContainer";
import { _GtkPropWrapperHost } from "./GtkPropWrapper";
import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkHeaderBarProps
  extends Partial<Gtk.HeaderBar.ConstructorProperties> {
  pack_start?: React.ReactNode | React.ReactNodeArray;
  pack_end?: React.ReactNode | React.ReactNodeArray;
}

export default function GtkHeaderBar({
  pack_start,
  pack_end,
  ...props
}: GtkHeaderBarProps) {
  return (
    <gtk-headerbar {...props}>
      {!!pack_start ? (
        <gtk-prop-wrapper id="pack_start">{pack_start}</gtk-prop-wrapper>
      ) : null}
      {!!pack_end ? (
        <gtk-prop-wrapper id="pack_end">{pack_end}</gtk-prop-wrapper>
      ) : null}
    </gtk-headerbar>
  );
}

export class _GtkHeaderBarHost extends _GtkContainerHost<
  GtkHeaderBarProps,
  Gtk.HeaderBar
> {
  get gtkWidgetClass() {
    return Gtk.HeaderBar;
  }

  appendChild(child: _GtkWidgetHost | _GtkPropWrapperHost) {
    if (child instanceof _GtkPropWrapperHost) {
      if (child.propName === "pack_start") {
        this.instance.pack_start(child.instance);
      }
      if (child.propName === "pack_end") {
        this.instance.pack_end(child.instance);
      }
      return;
    }
    super.appendChild(child);
  }

  removeChild(child: _GtkWidgetHost | _GtkPropWrapperHost) {
    if (child instanceof _GtkPropWrapperHost) {
      if (child.propName === "pack_start") {
        this.instance.remove(child.instance);
      }
      if (child.propName === "pack_end") {
        this.instance.remove(child.instance);
      }
      return;
    }
    super.removeChild(child);
  }
}

import React from "react";

import Gtk from "gtk";

import { _GtkContainerHost } from "./GtkContainer";
import { _GtkWidgetHost } from "./GtkWidget";
import { _GtkHeaderBarHost } from "./GtkHeaderBar";
import GtkPropWrapper, { _GtkPropWrapperHost } from "./GtkPropWrapper";

export interface GtkWindowProps
  extends Partial<Gtk.Window.ConstructorProperties> {
  children?: React.ReactNode;
  titlebar?: React.ReactNode;
  onDestroy?: (window: Gtk.Window) => void;
}

export default function GtkWindow({
  titlebar,
  children,
  ...props
}: GtkWindowProps) {
  return (
    <gtk-window {...props}>
      {titlebar ? (
        <gtk-prop-wrapper id="titlebar">{titlebar}</gtk-prop-wrapper>
      ) : null}
      {children}
    </gtk-window>
  );
}

export class _GtkWindowHost extends _GtkContainerHost<
  GtkWindowProps,
  Gtk.Window
> {
  get gtkWidgetClass() {
    return Gtk.Window;
  }

  appendChild(child: _GtkWidgetHost | _GtkPropWrapperHost) {
    if (child instanceof _GtkPropWrapperHost) {
      this.instance.set_titlebar(child.instance);
      return;
    }
    super.appendChild(child);
  }

  removeChild(child: _GtkWidgetHost | _GtkPropWrapperHost) {
    if (child instanceof _GtkPropWrapperHost) {
      this.instance.set_titlebar(null);
      return;
    }
    super.removeChild(child);
  }
}

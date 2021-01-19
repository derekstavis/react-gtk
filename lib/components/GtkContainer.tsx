import React from "react";

import Gtk from "Gjs/Gtk-3.0";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkContainerProps extends Gtk.Container_ConstructProps {
  children?: React.ReactNode;
}

export default function GtkContainer<Props = {}>(
  props: GtkContainerProps & Props
) {
  return <gtk-container {...props} />;
}

export class _GtkContainerHost<
  PublicProps = {},
  GtkType extends Gtk.Container = Gtk.Container
> extends _GtkWidgetHost<GtkContainerProps & PublicProps, GtkType> {
  get gtkWidgetClass(): { new (...args: any): GtkType } {
    // @ts-ignore: Unfortunately this is impossible to typecheck
    return Gtk.Container;
  }

  appendChild(child: _GtkWidgetHost) {
    if (this.instance.add) {
      console.log(child);
      this.instance.add(child.instance as Gtk.Widget);
    } else {
      super.appendChild(child);
    }
  }

  removeChild<_GtkHost>(child: _GtkWidgetHost) {
    if (this.instance.remove) {
      this.instance.remove(child.instance as Gtk.Widget);
    } else {
      super.removeChild(child);
    }
  }

  clearContainer() {
    for (const child of this.instance.get_children()) {
      this.instance.remove(child);
    }
  }
}

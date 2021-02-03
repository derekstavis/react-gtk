import React from "react";

import Gtk from "gtk";

import { _GtkContainerHost } from "./GtkContainer";

export interface GtkBinProps extends Partial<Gtk.Bin.ConstructorProperties> {}

export default function GtkBin(props: GtkBinProps) {
  return <gtk-bin {...props} />;
}

export class _GtkBinHost<
  PublicProps extends GtkBinProps = GtkBinProps,
  GtkType extends Gtk.Bin = Gtk.Bin
> extends _GtkContainerHost<PublicProps, GtkType> {
  get gtkWidgetClass(): { new (...args: any): GtkType } {
    // @ts-ignore: Unfortunately this is impossible to typecheck
    return Gtk.Bin;
  }
}

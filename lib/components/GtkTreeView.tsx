import React, { ReactNode } from "react";

import Gtk from "Gjs/Gtk-3.0";
import GObject from "Gjs/GObject-2.0";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkTreeViewColumn<Keys extends string>
  extends Gtk.TreeViewColumn_ConstructProps {
  type: GObject.Type;
  cellRenderer: Gtk.CellRenderer;
  attribute: Keys;
}

export interface GtkTreeViewProps<Data extends { [k: string]: any }>
  extends Gtk.TreeView_ConstructProps {
  columns: GtkTreeViewColumn<Exclude<keyof Data, number | symbol>>[];
  data: Data[];
}

export default function GtkTreeView<Data extends Record<string, any>>(
  props: GtkTreeViewProps<Data>
) {
  return <gtk-treeview {...props} />;
}

export class _GtkTreeViewHost<
  Data extends Record<string, any>
> extends _GtkWidgetHost<GtkTreeViewProps<Data>, Gtk.TreeView> {
  get gtkWidgetClass() {
    return Gtk.TreeView;
  }

  sanitizeProps(props: GtkTreeViewProps<Data>): Gtk.TreeView_ConstructProps {
    const { columns: _, data: __, ...rest } = props;
    return rest;
  }

  constructor(props: GtkTreeViewProps<Data>) {
    super(props);
    const { columns, data } = props;

    const store = new Gtk.ListStore();
    store.set_column_types(columns.map((col) => col.type));

    for (const datum of data) {
      store.set(
        store.append(),
        columns.map((_, i) => i),
        columns.map((col) => datum[col.attribute])
      );
    }

    this.instance.model = store;

    let i = 0;
    for (const item of columns) {
      const { cellRenderer, attribute, type, ...props } = item;
      const gtkColumn = new Gtk.TreeViewColumn(props);
      gtkColumn.pack_start(cellRenderer, true);
      gtkColumn.add_attribute(cellRenderer, attribute, i);
      this.instance.append_column(gtkColumn);
      i++;
    }
  }
}

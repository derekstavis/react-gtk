import React from "react";

import Gtk from "gtk";
import GObject from "gobject";

import { _GtkWidgetHost } from "./GtkWidget";

export interface GtkTreeViewColumn<Keys extends string>
  extends Partial<Gtk.TreeViewColumn.ConstructorProperties> {
  type: GObject.GType;
  cellRenderer: Gtk.CellRenderer;
  attribute: Keys;
}

export interface GtkTreeViewProps<Data extends { [k: string]: any }>
  extends Partial<Gtk.TreeView.ConstructorProperties> {
  columns: GtkTreeViewColumn<Exclude<keyof Data, number | symbol>>[];
  data: Data[];
  onSelectionChanged?: (selection: Gtk.TreeSelection) => void;
  cursor?: number[];
}

export default function GtkTreeView<Data extends Record<string, any>>(
  props: GtkTreeViewProps<Data>
) {
  return <gtk-treeview {...props} />;
}

export class _GtkTreeViewHost<
  Data extends Record<string, any>
> extends _GtkWidgetHost<GtkTreeViewProps<Data>, Gtk.TreeView> {
  private selectionChangeSignalId?: number;
  private store: Gtk.ListStore;

  get gtkWidgetClass() {
    return Gtk.TreeView;
  }

  sanitizeProps(
    props: GtkTreeViewProps<Data>
  ): Partial<Gtk.TreeView.ConstructorProperties> {
    const { columns: _, data: __, onSelectionChanged: ___, ...rest } = props;
    return rest;
  }

  constructor(props: GtkTreeViewProps<Data>) {
    super(props);
    const { columns } = props;

    this.store = new Gtk.ListStore();
    this.store.set_column_types(columns.map((col) => col.type));

    for (const datum of props.data) {
      this.store.set(
        this.store.append(),
        props.columns.map((_, i) => i),
        props.columns.map((col) => datum[col.attribute])
      );
    }

    this.instance.model = this.store;

    let i = 0;
    for (const item of columns) {
      const { cellRenderer, attribute, type, ...props } = item;
      const gtkColumn = new Gtk.TreeViewColumn(props);
      gtkColumn.pack_start(cellRenderer, true);
      gtkColumn.add_attribute(cellRenderer, "text", i);
      this.instance.insert_column(gtkColumn, i);
      i++;
    }
  }

  updateProps(
    props: GtkTreeViewProps<Data>,
    set: Array<keyof GtkTreeViewProps<Data>>,
    unset: Array<keyof GtkTreeViewProps<Data>>
  ) {
    super.updateProps(props, set, unset);

    if (set.includes("onSelectionChanged") && props.onSelectionChanged) {
      if (this.selectionChangeSignalId) {
        this.instance.get_selection().disconnect(this.selectionChangeSignalId);
      }
      this.selectionChangeSignalId = this.instance
        .get_selection()
        .connect("changed", props.onSelectionChanged);
    }

    if (unset.includes("onSelectionChanged")) {
      if (this.selectionChangeSignalId) {
        this.instance.get_selection().disconnect(this.selectionChangeSignalId);
      }
    }

    if (set.includes("cursor") && props.cursor) {
      this.instance
        .get_selection()
        .select_path(Gtk.TreePath.new_from_indices(props.cursor));
    }

    if (set.includes("data") && this.store) {
      this.store.clear();
      for (const datum of props.data) {
        this.store.set(
          this.store.append(),
          props.columns.map((_, i) => i),
          props.columns.map((col) => datum[col.attribute])
        );
      }
    }
  }
}

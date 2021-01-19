import React, { useCallback, useState } from "react";

import { render, GtkBox, GtkLabel } from "../../lib";

import GObject from "Gjs/GObject-2.0";
import Gtk from "Gjs/Gtk-3.0";

import { GtkTreeView, GtkWindow } from "../../lib/components";
import { GtkTreeViewColumn } from "../../lib/components/GtkTreeView";

const data = [
  {
    name: "Jurg",
    surname: "Billeter",
    phone: "555-0123",
    description: "A friendly person.",
  },
  {
    name: "Johannes",
    surname: "Schmid",
    phone: "555-1234",
    description: "Easy phone number to remember.",
  },
  {
    name: "Julita",
    surname: "Inca",
    phone: "555-2345",
    description: "Another friendly person.",
  },
  {
    name: "Javier",
    surname: "Jardon",
    phone: "555-3456",
    description: "Bring fish for his penguins.",
  },
  {
    name: "Jason",
    surname: "Clinton",
    phone: "555-4567",
    description: "His cake's not a lie.",
  },
  {
    name: "Random J.",
    surname: "Hacker",
    phone: "555-5678",
    description: "Very random!",
  },
];

const columns: Array<GtkTreeViewColumn<keyof typeof data[0]>> = [
  {
    type: GObject.TYPE_STRING,
    title: "Fist Name",
    cellRenderer: new Gtk.CellRendererText({}),
    expand: true,
    resizable: true,
    attribute: "name" as "name",
  },
  {
    type: GObject.TYPE_STRING,
    title: "Last Name",
    cellRenderer: new Gtk.CellRendererText({}),
    expand: true,
    resizable: true,
    attribute: "surname" as "surname",
  },
  {
    type: GObject.TYPE_STRING,
    title: "Phone Number",
    cellRenderer: new Gtk.CellRendererText({}),
    expand: true,
    resizable: true,
    attribute: "phone" as "phone",
  },
];

const App = () => {
  const [cursor, setIndex] = useState([2] as number[]);

  const handleSelectionChange = useCallback((sel: Gtk.TreeSelection) => {
    const [isSelected, model, iter] = sel.get_selected();

    if (isSelected && model && iter) {
      const cur = model.get_path(iter).get_indices();
      setIndex(cur);
    }
  }, []);

  return (
    <>
      <GtkWindow width_request={550} height_request={450}>
        <GtkBox spacing={8} orientation={Gtk.Orientation.VERTICAL} margin={8}>
          <GtkLabel label={data[cursor[0]].name} />
          <GtkTreeView
            expand
            data={data}
            columns={columns}
            onSelectionChanged={handleSelectionChange}
          />
        </GtkBox>
      </GtkWindow>
      <GtkWindow width_request={550} height_request={450}>
        <GtkBox spacing={8} orientation={Gtk.Orientation.VERTICAL} margin={8}>
          <GtkLabel label={data[cursor[0]].name} />
          <GtkTreeView
            expand
            data={data}
            columns={columns}
            onSelectionChanged={handleSelectionChange}
            cursor={cursor}
          />
        </GtkBox>
      </GtkWindow>
    </>
  );
};

Gtk.init(null);

const app = new Gtk.Application();

app.connect("startup", () => {
  render(<App />, app);
  console.log("rendered");
});

app.run(ARGV);

Gtk.main();

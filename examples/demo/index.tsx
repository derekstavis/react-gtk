import React, { useMemo } from "react";

import { render, GtkBox, GtkLabel } from "../../lib";

import GObject from "Gjs/GObject-2.0";
import Gtk from "Gjs/Gtk-3.0";

import { GtkButton, GtkTreeView } from "../../lib/components";

const App = () => {
  const data = useMemo(() => {
    return [
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
  }, []);
  return (
    <GtkBox spacing={8} orientation={Gtk.Orientation.VERTICAL} margin={8}>
      <GtkLabel label="Derek Stavis" />
      <GtkButton label="You bet" onClicked={() => console.log("BINGO")} />
      <GtkTreeView
        expand
        data={data}
        columns={[
          {
            type: GObject.TYPE_STRING,
            title: "Fist Name",
            cellRenderer: new Gtk.CellRendererText({}),
            attribute: "name",
          },
          {
            type: GObject.TYPE_STRING,
            title: "Last Name",
            cellRenderer: new Gtk.CellRendererText({}),
            attribute: "surname",
          },
          {
            type: GObject.TYPE_STRING,
            title: "Phone Number",
            cellRenderer: new Gtk.CellRendererText({}),
            resizable: true,
            attribute: "phone",
          },
        ]}
      />
    </GtkBox>
  );
};

Gtk.init(null);

const window = new Gtk.Window({
  width_request: 550,
  height_request: 450,
});

window.set_titlebar(
  new Gtk.HeaderBar({
    title: "Milestones",
    show_close_button: true,
  })
);

window.connect("delete-event", () => {
  Gtk.main_quit();
  return true;
});

render(<App />, window);

console.log("rendered");

window.show_all();

Gtk.main();

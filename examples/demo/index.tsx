import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";

import { render, GtkBox, GtkLabel } from "../../lib";

import GObject from "Gjs/GObject-2.0";
import Gtk from "Gjs/Gtk-3.0";

import {
  GtkButton,
  GtkEntry,
  GtkTreeView,
  GtkWindow,
} from "../../lib/components";
import { GtkTreeViewColumn } from "../../lib/components/GtkTreeView";

const initialData = [
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

type Contact = typeof initialData[0];

const columns: Array<GtkTreeViewColumn<keyof Contact>> = [
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

interface NewContactWindowProps {
  onSave?: (contact: Contact) => void;
  onClose?: () => void;
}

const NewContactWindow: FunctionComponent<NewContactWindowProps> = ({
  onSave,
  onClose,
}) => {
  const [draftEntry, setDraftEntry] = useState<Contact>({
    phone: "",
    name: "",
    surname: "",
    description: "",
  });
  const handleSave = useCallback(() => {
    if (onSave) {
      onSave(draftEntry);
    }
  }, [draftEntry, onSave]);
  return (
    <GtkWindow
      title="Add new"
      width_request={250}
      height_request={250}
      onDestroy={onClose}
    >
      <GtkBox
        orientation={Gtk.Orientation.VERTICAL}
        expand
        spacing={8}
        margin={8}
      >
        <GtkLabel label="Name" hexpand />
        <GtkEntry
          hexpand
          onChanged={useCallback(
            (entry) => {
              setDraftEntry({
                ...draftEntry,
                name: entry.text,
              });
            },
            [draftEntry]
          )}
        />
        <GtkLabel label="Surname" hexpand />
        <GtkEntry
          hexpand
          onChanged={useCallback(
            (entry) =>
              setDraftEntry({
                ...draftEntry,
                surname: entry.text,
              }),
            [draftEntry]
          )}
        />
        <GtkLabel label="Phone" hexpand />
        <GtkEntry
          hexpand
          onChanged={useCallback(
            (entry) =>
              setDraftEntry({
                ...draftEntry,
                phone: entry.text,
              }),
            [draftEntry]
          )}
        />
        <GtkButton label="Save" onClicked={handleSave} />
      </GtkBox>
    </GtkWindow>
  );
};

const App = () => {
  const [cursor, setIndex] = useState([2] as number[]);
  const [data, setData] = useState(initialData);
  const [isDrafting, setDrafting] = useState(false as boolean);

  const handleSelectionChange = useCallback((sel: Gtk.TreeSelection) => {
    const [isSelected, model, iter] = sel.get_selected();

    if (isSelected && model && iter) {
      const cur = model.get_path(iter).get_indices();
      setIndex(cur);
    }
  }, []);

  const handleSave = useCallback(
    (draftEntry: Contact) => {
      console.log("saving draft: ", JSON.stringify(draftEntry));
      setData([...data, draftEntry]);
      setDrafting(true);
    },
    [data]
  );

  const handleAddNew = useCallback(() => {
    setDrafting(true);
  }, []);

  return (
    <>
      {isDrafting && (
        <NewContactWindow
          onSave={handleSave}
          onClose={() => setDrafting(false)}
        />
      )}
      <GtkWindow width_request={550} height_request={450}>
        <GtkBox spacing={8} orientation={Gtk.Orientation.VERTICAL} margin={8}>
          <GtkBox orientation={Gtk.Orientation.HORIZONTAL} spacing={8}>
            <GtkLabel label={data[cursor[0]].name} hexpand />
            <GtkButton label="Add new" onClicked={handleAddNew} />
          </GtkBox>
          <GtkTreeView
            expand
            data={data}
            columns={columns}
            onSelectionChanged={handleSelectionChange}
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

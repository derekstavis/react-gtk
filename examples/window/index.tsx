import React from "react";

import Gtk from "gtk";

import {
  GtkBox,
  GtkButton,
  GtkHeaderBar,
  GtkLabel,
  GtkWindow,
  render,
} from "../../lib";

const app = new Gtk.Application();

const App = () => {
  return (
    <>
      <GtkWindow
        width_request={550}
        height_request={450}
        onDestroy={() => app.quit()}
        titlebar={
          <GtkHeaderBar
            title="xxx"
            pack_start={
              <GtkBox>
                <GtkButton label="aaa" />
                <GtkButton label="bbb" />
              </GtkBox>
            }
            pack_end={
              <GtkBox>
                <GtkButton label="ccc" />
                <GtkButton label="ddd" />
              </GtkBox>
            }
          />
        }
      >
        <GtkLabel label="Hello" />
      </GtkWindow>
    </>
  );
};

Gtk.init(null);

app.connect("activate", () => {
  render(<App />, app);
  console.log("rendered");
});

app.run(ARGV);

Gtk.main();

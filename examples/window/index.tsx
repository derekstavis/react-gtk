import React from "react";

import {render} from "../..";

import Gtk from "Gjs/Gtk-3.0";

const window = new Gtk.Window({
  title: "React GTK Test"
})

const App = () => (null);

render(<App />, window);

window.show_all();

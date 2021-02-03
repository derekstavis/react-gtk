import "./intrinsics";

import { _GtkLabelHost } from "./GtkLabel";
import { _GtkButtonHost } from "./GtkButton";
import { _GtkBoxHost } from "./GtkBox";
import { _GtkTreeViewHost } from "./GtkTreeView";
import { _GtkWindowHost } from "./GtkWindow";
import { _GtkEntryHost } from "./GtkEntry";
import { _GtkHeaderBarHost } from "./GtkHeaderBar";
import { _GtkSpinnerHost } from "./GtkSpinner";
import {_GtkPropWrapperHost} from "./GtkPropWrapper";

export { default as GtkLabel } from "./GtkLabel";
export { default as GtkButton } from "./GtkButton";
export { default as GtkBox } from "./GtkBox";
export { default as GtkTreeView } from "./GtkTreeView";
export { default as GtkWindow } from "./GtkWindow";
export { default as GtkEntry } from "./GtkEntry";
export { default as GtkHeaderBar } from "./GtkHeaderBar";
export { default as GtkSpinner } from "./GtkSpinner";

export const _GtkHosts = {
  "gtk-label": _GtkLabelHost,
  "gtk-button": _GtkButtonHost,
  "gtk-box": _GtkBoxHost,
  "gtk-treeview": _GtkTreeViewHost,
  "gtk-window": _GtkWindowHost,
  "gtk-entry": _GtkEntryHost,
  "gtk-headerbar": _GtkHeaderBarHost,
  "gtk-spinner": _GtkSpinnerHost,
  "gtk-prop-wrapper": _GtkPropWrapperHost,
};

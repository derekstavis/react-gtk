import "./intrinsics";

import { _GtkLabelHost } from "./GtkLabel";
import { _GtkButtonHost } from "./GtkButton";
import { _GtkBoxHost } from "./GtkBox";
import { _GtkTreeViewHost } from "./GtkTreeView.tsx";

export { default as GtkLabel } from "./GtkLabel";
export { default as GtkButton } from "./GtkButton";
export { default as GtkBox } from "./GtkBox";
export { default as GtkTreeView } from "./GtkTreeView";

export const _GtkHosts = {
  "gtk-label": _GtkLabelHost,
  "gtk-button": _GtkButtonHost,
  "gtk-box": _GtkBoxHost,
  "gtk-treeview": _GtkTreeViewHost,
};

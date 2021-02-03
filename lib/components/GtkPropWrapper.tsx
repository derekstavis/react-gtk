import React from "react";

import { _GtkWidgetHost } from "./GtkWidget";
import { GtkWidgets } from "./types";

export interface GtkPropWrapperProps {
  id: string;
  children: React.ReactNode;
}

export class _GtkPropWrapperHost {
  propName: string;
  instance?: GtkWidgets;

  constructor(props: GtkPropWrapperProps) {
    this.propName = props.id;
  }

  appendChild(child: _GtkWidgetHost) {
    this.instance = child.instance;
  }

  removeChild() {
    throw new TypeError("Can't remove children of GtkPropWrapper");
  }
}

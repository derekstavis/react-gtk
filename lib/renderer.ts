import Reconciler, { FiberRoot } from "react-reconciler";
import { shallowEqual } from "fast-equals";

import Gtk from "gtk";

import { _GtkHosts } from "./components";
import { GtkWidgetProps, _GtkWidgetHost } from "./components/GtkWidget";
import { _GtkWindowHost } from "./components/GtkWindow";

type Props = {
  children?: React.ReactNode;
  [key: string]: any;
};

type UpdatePayload = {
  set: Array<keyof Gtk.Widget.ConstructorProperties>;
  unset: Array<keyof Gtk.Widget.ConstructorProperties>;
};

const renderer = Reconciler({
  supportsMutation: true,
  isPrimaryRenderer: true,
  getRootHostContext: () => null,
  prepareForCommit: () => {
    console.log("prepareForCommit");
    return null;
  },
  resetAfterCommit: () => {
    console.log("resetAfterCommit");
    return null;
  },
  // @ts-ignore
  clearContainer: (container: Gtk.Application) => {
    console.log("clearContainer", container.constructor.name);
    const windows = container.get_windows();
    windows.forEach((w) => container.remove_window(w));
  },
  getChildHostContext: (parentHostContext) => {
    return parentHostContext;
  },
  shouldSetTextContent: () => {
    return false;
  },
  createInstance: (
    type: keyof typeof _GtkHosts,
    props: Record<string, any>
  ) => {
    console.log("createInstance");
    const Type = _GtkHosts[type];
    // @ts-ignore
    return new Type(props);
  },
  getPublicInstance: (instance: _GtkWidgetHost) => {
    console.log("getPublicInstance");
    return instance.instance;
  },
  appendChildToContainer: (
    container: Gtk.Application,
    child: _GtkWindowHost
  ) => {
    console.log("appendChildToContainer");
    if (typeof child === "undefined") {
      return;
    }
    container.add_window(child.instance);
  },
  insertInContainerBefore: (
    container: Gtk.Application,
    child: _GtkWindowHost
  ) => {
    console.log("insertInContainerBefore");
    if (typeof child === "undefined") {
      return;
    }
    container.add_window(child.instance);
  },
  finalizeContainerChildren: (_: Gtk.Application, child: _GtkWidgetHost) => {
    console.log("finalizeContainerChildren");
    if (typeof child === "undefined") {
      return;
    }
    child.instance.show_all();
    return false;
  },
  appendChild: (parentInstance: _GtkWidgetHost, child: _GtkWidgetHost) => {
    console.log("appendChild");
    if (typeof child === "undefined") {
      return;
    }
    parentInstance.appendChild(child);
  },
  appendInitialChild: (
    parentInstance: _GtkWidgetHost,
    child: _GtkWidgetHost
  ) => {
    console.log("appendInitialChild");
    if (typeof child === "undefined") {
      return;
    }
    parentInstance.appendChild(child);
  },
  finalizeInitialChildren: (parentInstance: _GtkWidgetHost) => {
    console.log("finalizeInitialChildren");
    parentInstance.instance.show_all();
    return false;
  },
  removeChild: (parentInstance: _GtkWidgetHost, child: _GtkWidgetHost) => {
    console.log("removeChild");
    if (typeof child === "undefined") {
      return;
    }
    parentInstance.removeChild(child);
  },
  removeChildFromContainer: (
    container: Gtk.Application,
    child: _GtkWindowHost
  ) => {
    console.log("removeChildFromContainer");
    if (typeof child === "undefined") {
      return;
    }
    container.remove_window(child.instance);
  },
  prepareUpdate(instance, type, oldProps, newProps) {
    console.log("prepareUpdate");
    const { children: _, ...oldNoChildren } = oldProps as Props;
    const { children: __, ...newNoChildren } = newProps as Props;
    const propsAreEqual = shallowEqual(oldNoChildren, newNoChildren);

    if (propsAreEqual) {
      return null;
    }

    const newKeys = Object.keys(newNoChildren);
    const oldKeys = Object.keys(oldNoChildren);

    const unset = oldKeys.reduce(
      (memo, oldKey) => (newKeys.includes(oldKey) ? memo : [...memo, oldKey]),
      [] as string[]
    );

    const set = newKeys.reduce(
      (memo, newKey) =>
        oldNoChildren[newKey] !== newNoChildren[newKey]
          ? [...memo, newKey]
          : memo,
      [] as string[]
    );

    // console.log(
    //   "prepareUpdate",
    //   JSON.stringify(
    //     {
    //       oldNoChildren: Object.keys(oldNoChildren),
    //       newNoChildren: Object.keys(newNoChildren),
    //       set,
    //       unset,
    //     },
    //     null,
    //     2
    //   ),
    //   propsAreEqual
    // );

    return { unset, set };
  },
  commitUpdate: (
    instance: _GtkWidgetHost,
    updatePayload: UpdatePayload,
    type,
    oldProps: Gtk.Widget.ConstructorProperties,
    newProps: Gtk.Widget.ConstructorProperties,
    internalInstanceHandle
  ) => {
    console.log("commitUpdate");

    for (const key of updatePayload.unset) {
      instance.instance.set_property(key as string, null);
    }

    instance.updateProps(newProps, updatePayload.set, updatePayload.unset);

    // stop compiler from yelling at unused stuff
    void type, oldProps, internalInstanceHandle;
  },
  commitMount: (instance, type, newProps, internalInstanceHandle) => {
    console.log("commitMount");
    // noop
  },
});

const roots = new Map<Gtk.Application, FiberRoot>();

export const render = (element: React.ReactNode, root: Gtk.Application) => {
  let container = roots.get(root);

  if (!container) {
    container = renderer.createContainer(root, false, false);
    roots.set(root, container);
  }

  renderer.updateContainer(element, container, null, () => undefined);
};

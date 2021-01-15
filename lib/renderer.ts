import Reconciler, { FiberRoot } from "react-reconciler";
import { shallowEqual } from "fast-equals";

import Gtk from "Gjs/Gtk-3.0";
import GLib from "Gjs/GLib-2.0";

import { GtkWidgets } from "./components/types";
import { _GtkHosts } from "./components";

const renderer = Reconciler({
  supportsMutation: true,
  getRootHostContext: () => ({
    isInsideText: false,
  }),
  prepareForCommit: () => {
    console.log("prepareForCommit");
  },
  resetAfterCommit: () => {
    console.log("resetAfterCommit");
  },
  clearContainer: (container) => {
    console.log("clearContainer", container.constructor.name);
    // container.clearContainer();
  },
  getChildHostContext: (parentHostContext, type, rootContainerInstance) => {
    return {};
  },
  shouldSetTextContent: (type, props) => {
    return false;
  },
  createInstance(
    type: keyof typeof _GtkHosts,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    console.log("createInstance");

    const Type = _GtkHosts[type];

    return new Type(props);
  },
  finalizeInitialChildren: (
    parentInstance,
    type,
    props,
    rootContainerInstance,
    hostContext
  ) => {
    console.log("finalizeInitialChildren");
    return true;
  },
  appendChild: (parentInstance, child) => {
    console.log("appendChild");
    parentInstance.appendChild(child);
  },
  appendChildToContainer: (container, child) => {
    console.log("appendChildToContainer");
    container.add(child.instance);
  },
  removeChildFromContainer: (container, child) => {
    console.log("removeChildFromContainer");
    container.remove(child.instance);
  },
  appendInitialChild: (parentInstance, child) => {
    console.log("appendInitialChild");
    parentInstance.appendChild(child);
  },
  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    hostContext
  ) {
    console.log("prepareUpdate");
    const { children: _, ...oldNoChildren } = oldProps;
    const { children: __, ...newNoChildren } = newProps;
    const propsAreEqual = shallowEqual(oldNoChildren, newNoChildren);

    if (propsAreEqual) {
      return null;
    }

    const newKeys = Object.keys(newNoChildren);
    const oldKeys = Object.keys(oldNoChildren);

    const unset = oldKeys.reduce(
      (memo, key) => (newKeys.indexOf(key) < 0 ? [...memo, key] : memo),
      [] as string[]
    );

    const set = newKeys.reduce(
      (memo, key) => (oldKeys.indexOf(key) < 0 ? [...memo, key] : memo),
      [] as string[]
    );

    console.log(
      "prepareUpdate",
      JSON.stringify(oldNoChildren),
      JSON.stringify(newNoChildren),
      !propsAreEqual
    );

    return { unset, set };
  },
  commitMount: (instance, type, newProps, internalInstanceHandle) => {
    console.log("commitMount");
    // noop
  },
});

const roots = new Map<Gtk.Window, FiberRoot>();

export const render = (element: React.ReactNode, root: Gtk.Window) => {
  let container = roots.get(root);

  if (!container) {
    container = renderer.createContainer(root, false, false);
    roots.set(root, container);
  }

  renderer.updateContainer(element, container, null, () => undefined);
};
import Reconciler, { FiberRoot } from "react-reconciler";
import { shallowEqual } from "fast-equals";

import Gtk from "Gjs/Gtk-3.0";
import GLib from "Gjs/GLib-2.0";

import { GtkWidgets } from "./components/types";
import { _GtkHosts } from "./components";
import { _GtkWidgetHost } from "./components/GtkWidget";

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
    parentInstance.instance.show_all()
    return true;
  },
  appendChild: (parentInstance, child) => {
    console.log("appendChild");
    parentInstance.appendChild(child);
  },
  appendInitialChild: (parentInstance, child) => {
    console.log("appendInitialChild");
    parentInstance.appendChild(child);
  },
  appendChildToContainer: (container, child) => {
    console.log("appendChildToContainer");
    container.add_window(child.instance);
  },
  removeChildFromContainer: (container, child) => {
    console.log("removeChildFromContainer");
    container.remove_window(child.instance);
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

    console.log(
      "prepareUpdate",
      JSON.stringify(
        {
          oldNoChildren: Object.keys(oldNoChildren),
          newNoChildren: Object.keys(newNoChildren),
          set,
          unset,
        },
        null,
        2
      ),
      propsAreEqual
    );

    return { unset, set };
  },
  commitUpdate: (
    instance: _GtkWidgetHost,
    updatePayload,
    type,
    oldProps,
    newProps,
    internalInstanceHandle
  ) => {
    console.log("commitUpdate");

    for (const key of updatePayload.unset) {
      instance.instance[key] = null;
    }

    instance.updateProps(newProps, updatePayload.set, updatePayload.unset);
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

import Reconciler, { FiberRoot } from "react-reconciler";
import { shallowEqual } from "fast-equals";

import Gtk from "gtk";

import { _GtkHosts } from "./components";
import { _GtkWidgetHost } from "./components/GtkWidget";

type Props = {
  children?: React.ReactNode;
  [key: string]: any;
};

type UpdatePayload = {
  set: keyof Gtk.Widget.ConstructorProperties;
  unset: keyof Gtk.Widget.ConstructorProperties;
};

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
  clearContainer: (container: Gtk.Application) => {
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
    parentInstance.instance.show_all();
    return true;
  },
  insertInContainerBefore: (container, child, beforeChild) => {
    console.log("insertInContainerBefore");
    container.add_window(child.instance);
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
    updatePayload: UpdatePayload,
    type,
    oldProps: Gtk.Widget.ConstructorProperties,
    newProps: Gtk.Widget.ConstructorProperties,
    internalInstanceHandle
  ) => {
    console.log("commitUpdate");

    for (const key of updatePayload.unset) {
      instance.instance.set_property(key, null);
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

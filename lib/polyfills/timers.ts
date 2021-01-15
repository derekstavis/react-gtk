import GLib from "Gjs/GLib-2.0";

const timers = {
  setImmediate: <T extends any[]>(
    handler: (...args: T) => void,
    ...args: T
  ) => {
    return GLib.idle_add(GLib.PRIORITY_HIGH_IDLE, () => {
      handler(...args);
      return false;
    });
  },
  clearImmediate: (immediateId: number) => {
    GLib.source_remove(immediateId);
  },
  setInterval: (handler: () => void, interval: number) => {
    return GLib.timeout_add(GLib.PRIORITY_DEFAULT, interval, () => {
      handler();
      return true;
    });
  },
  clearInterval: (intervalId: number) => {
    GLib.source_remove(intervalId);
  },
  setTimeout: (handler: () => void, interval: number) => {
    return GLib.timeout_add(GLib.PRIORITY_DEFAULT, interval, () => {
      handler();
      return false;
    });
  },
  clearTimeout: (timeoutId: number) => {
    GLib.source_remove(timeoutId);
  },
};

type Timers = typeof timers;

declare global {
  const setImmediate: Timers["setImmediate"];
  const clearImmediate: Timers["clearImmediate"];
  const setTimeout: Timers["setTimeout"];
  const clearTimeout: Timers["clearTimeout"];
  const setInterval: Timers["setInterval"];
  const clearInterval: Timers["clearInterval"];

  const window: typeof globalThis & Timers;
}

Object.assign(window, timers);

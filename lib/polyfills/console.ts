// @ts-ignore
const Format = imports.format;

const isFormatted = (message: string) =>
  /%(s|o|O|d|i|(\.[0-9]+){0,1}f)/.test(message);

const logFormatted = (...args: any[]) => {
  const [message, ...data] = args;
  if (typeof message === "string" && isFormatted(message)) {
    log(Format.vprintf(message, data));
  } else if (message instanceof Error) {
    logError(message, data.join(" "));
  } else if (typeof message === "object") {
    log([message, ...data].join(" "));
  } else {
    log([message, ...data].join(" "));
  }
};

const console = {
  log: logFormatted,
  warn: logFormatted,
  debug: logFormatted,
  error: logFormatted,
  info: logFormatted,
  trace: (...args: any[]) => {
    const error = new Error();
    logFormatted(...args);
    log(error.stack);
  },
};

type Console = typeof console;

declare global {
  const console: Console;
}

Object.assign(window, { console });

export default console;

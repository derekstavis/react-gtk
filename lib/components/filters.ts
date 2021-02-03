export const omitChildren = <Props extends Record<string, any>>(
  props: Props
) => {
  const { children: _, ...rest } = props;
  return rest;
};

export const omitKeys = <Props extends Record<string, any>>(
  keys: Array<keyof Props>,
  props: Props
) => {
  const newProps = { ...props };
  for (let key of keys) {
    delete newProps[key];
  }
  return newProps;
};

export const omitHandlers = <Props extends Record<string, any>>(
  props: Props
) => {
  let rest: Record<string, any> = {};
  for (let key of Object.keys(props)) {
    if (!key.startsWith("on")) {
      rest[key] = props[key];
    }
  }
  return rest;
};

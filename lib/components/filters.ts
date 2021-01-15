export const omitChildren = <Props extends Record<string, any>>(
  props: Props
) => {
  const { children: _, ...rest } = props;
  return rest;
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
}

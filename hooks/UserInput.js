import { useCallback, useState } from "react";
import { compose, curry } from "ramda";

export default function useUserInput(
  validateValue = (v) => v,
  defaultValue = "",
) {
  const [state, setState] = useState(defaultValue);

  const getTarget = useCallback(({ target }) => target, []);
  const getValue = useCallback(({ value }) => value, []);
  const ignoreFalse = useCallback(curry((f, v) => v === false ? null : f(v)), []);
  const setValidatedState = useCallback(compose(ignoreFalse(setState), validateValue, getValue, getTarget), []);

  return [state, setValidatedState];
}

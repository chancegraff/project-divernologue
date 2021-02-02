import { useCallback, useMemo, useState } from "react";
import { compose, curry } from "ramda";

/**
 * Checks input before setting state using the provided validateValue function.
 */
export default function useUserInput(
  validateValue = (v) => v,
  defaultValue = "",
) {
  const [state, setState] = useState(defaultValue);

  const getTarget = useCallback(({ target }) => target, []);
  const getValue = useCallback(({ value }) => value, []);
  const ignoreFalseOr = useCallback(curry((f, v) => v === false ? null : f(v)), []);
  const setValidatedState = useCallback(compose(ignoreFalseOr(setState), validateValue, getValue, getTarget), []);

  return useMemo(() => [state, setValidatedState], [state]);
}

import { useCallback, useMemo, useState } from "react";
import { compose, isNil, path, unless } from "ramda";

/**
 * Checks input before setting state using the provided validateValue function.
 */
export default function useUserInput(
  validateValue = ({ value }) => value,
  defaultValue = "",
) {
  const [state, setState] = useState(defaultValue);
  const setValidatedState = useCallback(compose(unless(isNil, setState), validateValue, path(["target", "value"])), []);
  return useMemo(() => [state, setValidatedState], [state]);
}

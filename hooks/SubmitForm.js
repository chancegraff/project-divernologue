import { useCallback } from "react";

export default function useSubmitForm() {
  return useCallback((e) => {
    e.preventDefault();
  }, []);
}

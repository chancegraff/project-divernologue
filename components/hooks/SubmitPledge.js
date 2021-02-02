import { useCallback } from "react";

export default function useSubmitPledge() {
  return useCallback((e) => {
    e.preventDefault();
  }, []);
}

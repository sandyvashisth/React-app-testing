import { renderHook } from "@testing-library/react-hooks";
import { useTitle } from "./useTitle";

test("Should set document title", () => {
  renderHook(() => useTitle("test"));
  expect(document.title).toBe("test");
});

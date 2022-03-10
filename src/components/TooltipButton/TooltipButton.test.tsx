import { render, screen } from "@testing-library/react";
import { TooltipButton } from "./TooltipButton";
import userEvent from "@testing-library/user-event";

test("Hovering over button shows persons name", async () => {
  render(<TooltipButton personId={1} />);
  userEvent.hover(screen.getByText("View"))
  expect(await screen.findByText("Bill Peters")).toBeInTheDocument()
  userEvent.unhover(screen.getByText("View"))
  expect(await screen.queryByText("Bill Peters")).not.toBeInTheDocument()
});
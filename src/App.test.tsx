import { getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { App } from "./App";

test("When 'Add new Person' clicked on HomePage, should go to NewPersonPage", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  userEvent.click(screen.getByText("Add new person"));
  expect(await screen.findByText(/New person/)).toBeInTheDocument();
});

test("When 'Home' clicked on NewPersonPage, should go to HomePage", async () => {
  render(
    <MemoryRouter initialEntries={["/newperson"]}>
      <App />
    </MemoryRouter>
  );
  userEvent.click(screen.getByText("Home"));
  expect(await screen.findByText(/My App/)).toBeInTheDocument();
});

test("verify 'not found' message is rendered for an unknown path", async () => {
  render(
    <MemoryRouter initialEntries={["/unknown"]}>
      <App />
    </MemoryRouter>
  );
  expect(await screen.findByText(/not found/)).toBeInTheDocument();
});

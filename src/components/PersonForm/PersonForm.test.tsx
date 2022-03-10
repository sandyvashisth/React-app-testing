import { render, screen } from "@testing-library/react";
import { PersonForm } from "./PersonForm";
import userEvent from "@testing-library/user-event";
import * as data from "./data";

test("Should render success message when form successfully submitted", async () => {
  // TODO - mock fetch
  const mockFetch = jest.spyOn(window, "fetch");
  mockFetch.mockResolvedValue(
    new Response(
      JSON.stringify({
        id: 1,
      }),
      { status: 200 }
    )
  );
  render(<PersonForm />);
  // TODO - submit the form with a name of Fred and a score of 10
  userEvent.type(screen.getByLabelText("Name"), "Fred");
  userEvent.type(screen.getByLabelText("Score"), "10");
  userEvent.click(screen.getByText("Save"));
  expect(await screen.findByText(/successfully added/i)).toBeInTheDocument();
  // TODO - restore fetch
  mockFetch.mockRestore();
});

test("Should render error message when invalid form submitted", async () => {
  // TODO - mock fetch
  const mockFetch = jest.spyOn(window, "fetch");
  mockFetch.mockResolvedValue(
    new Response(
      JSON.stringify({
        errors: { Name: "Invalid name"},
      }),
      { status: 400 }
    )
  );
  render(<PersonForm />);
  userEvent.type(screen.getByLabelText("Name"), "Fred");
  userEvent.type(screen.getByLabelText("Score"), "10");
  userEvent.click(screen.getByText("Save"));
  // TODO - submit the form with a name of Fred and a score of 10
  expect(await screen.findByText(/problem/i)).toBeInTheDocument();
  // TODO - restore fetch
  mockFetch.mockRestore();
});

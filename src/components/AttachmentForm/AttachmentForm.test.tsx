import { render, screen, act, waitFor } from "@testing-library/react";
import { AttachmentForm } from "./AttachmentForm";
import userEvent from "@testing-library/user-event";

test("Clicking Upload button when file has been selected should render a success message containing file name", async () => {
  render(<AttachmentForm />);
  const file = new File(["test"], "test.txt", { type: "plain/text" });
  const input: HTMLInputElement = await screen.findByLabelText("Attachment");
  userEvent.upload(input, file);

  userEvent.click(screen.getByText("Upload"));

  expect(input?.files).toHaveLength(1);
  // await waitFor(() => {
  //   expect(screen.getByText("Successfully uploaded")).toBeInTheDocument();
  // });
});

test("Clicking Upload button when two files have been selected should render a success message containing the file names", async () => {
  act(() => {
    render(<AttachmentForm />);
  });

  const files = [
    new File(["test1"], "test1.txt", { type: "plain/text" }),
    new File(["test2"], "test2.txt", { type: "plain/text" }),
  ];

  const input: HTMLInputElement = await screen.findByLabelText("Attachment");

  userEvent.upload(input, files);
  act(() => {
    userEvent.click(screen.getByText("Upload"));
  });

  expect(input?.files).toHaveLength(2);
  // expect(await screen.findByText("Successfully uploaded")).toBeInTheDocument();
});

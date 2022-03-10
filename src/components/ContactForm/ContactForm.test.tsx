import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";

test("should submit form successfully when save button click upon form completion", async () => {
  render(<ContactForm />);

  userEvent.type(screen.getByLabelText("Name"), "Test");
  userEvent.type(screen.getByLabelText("Message"), "Test");
  const saveButton = screen.getByText("Save");
  
  userEvent.click(saveButton)

  expect(
    await screen.findByText("Successfully saved")
  ).toBeInTheDocument();
});


test("should render a sccuss message when press enter upon form completion", async()=>{
render(<ContactForm />)

userEvent.type(screen.getByLabelText('Message'), 'test')
userEvent.type(screen.getByLabelText('Name'), 'test{enter}')

expect(await screen.findByText("Successfully saved")).toBeInTheDocument();
})

test("should render a sccuss message when save click upon form completion with department", async()=>{
  render(<ContactForm />)
  
  userEvent.type(screen.getByLabelText('Message'), 'test')
  userEvent.selectOptions(screen.getByLabelText('Department'), [screen.getByText('Sales'), screen.getByText('Support')]);
  userEvent.type(screen.getByLabelText('Name'), 'test{enter}')
  
  expect(await screen.findByText("Successfully saved")).toBeInTheDocument();
  })

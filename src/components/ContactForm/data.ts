import { TFormData } from "./ContactForm";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function post(details: TFormData) {
  await wait(300);
  // console.log(details);
}
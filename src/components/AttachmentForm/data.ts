import { TFormData } from "./AttachmentForm";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function post(details: TFormData) {
  await wait(300);
  // console.logdetails);
}
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ContactForm } from "./components/ContactForm";
import { AttachmentForm } from "./components/AttachmentForm";
import { TooltipButton } from "./components/TooltipButton";
import { PersonForm } from "./components/PersonForm";
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <ul>
      <li>
        <h3>1. Contact Form Test</h3> <ContactForm />
      </li>
      <li>
        <h3>2. Attachment Form Test</h3> <AttachmentForm />
      </li>
      <li>
        <h3>3. Tooltip Test</h3>
        <TooltipButton personId={1} />
      </li>
      <li>
        <h3>4. Mocking function and modules</h3>
        <PersonForm></PersonForm>
      </li>
      <li>
        <h3>5. Routing </h3>
        <BrowserRouter>
        <App></App>
        </BrowserRouter>
      </li>
    </ul>
  </React.StrictMode>,
  document.getElementById("root")
);

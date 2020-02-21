import React from "react";
import { render } from "@testing-library/react";
import ContactForm from './ContactForm';
import 'mutationobserver-shim';


test("ContactForm renders without crashing.", () => {
    render(<ContactForm/>);
});

test("Check for form inputs", () => {
    const { findByLabelText } = render(<ContactForm/>);

    findByLabelText(/first name*/i);
    findByLabelText(/last name*/i);
    findByLabelText(/email*/i);
    findByLabelText(/message/i);
});
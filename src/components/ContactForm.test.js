import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';
import 'mutationobserver-shim';



test("ContactForm renders without crashing.", () => {
    render(<ContactForm/>);
});

test("Check for form inputs", () => {
    const { getByLabelText } = render(<ContactForm/>);

    getByLabelText(/first name*/i);
    getByLabelText(/last name*/i);
    getByLabelText(/email*/i);
    getByLabelText(/message/i);
    //had to add id to lables for getByLabelText to work
});

test("Check if form submits values", () => {
   
    const { getByLabelText, getByText, getByTestId } = render(<ContactForm/>);
    const fname = getByLabelText(/first name*/i);
    const lname = getByLabelText(/last name*/i);
    const email =getByLabelText(/email*/i);
    const message = getByLabelText(/message/i);

    fireEvent.change(fname, { target : {value: "test fname" } });
    fireEvent.change( lname, { target: { value: 'test lname' } });
    fireEvent.change( email, { target: { value: 'test@someemail.com' } });
    fireEvent.change( message, { target: { value: 'test message' } });

    expect(fname.value).toBe("test fname");
    expect(lname.value).toBe("test lname");
    expect(email.value).toBe("test@someemail.com");
    expect(message.value).toBe("test message");

    
    fireEvent.click(getByTestId(/submit/i));
    
    const dataText = getByTestId(/data/i);
    
    expect(dataText);
    

});
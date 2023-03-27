import * as React from "react";
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import UseRefBasics from "./UseRefBasics";

test('elements are in the DOM', () => { 
    render(<UseRefBasics/>);
    const button = screen.getByRole('button', {name: /submit/i})
    const increaseButton = screen.getByRole('button', {name: /increase/i})
    const name = screen.getByText(/name/i)
    const value = screen.getByText(/value/i)
    const input = screen.getByRole("textbox")
    expect(button).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(increaseButton).toBeInTheDocument();
    expect(value).toBeInTheDocument();
    expect(input).toBeInTheDocument();
})

test('increase button works', ()=> {
    render(<UseRefBasics/>);
    const increaseButton = screen.getByRole('button', {name: /increase/i})
    user.click(increaseButton)
    expect(() => screen.getByText("value : 1").toBeInTheDocument())
})


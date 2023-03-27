import * as React from "react";
import { render, screen } from '@testing-library/react';
import Navbar from "./Navbar";

test('logout button and h5 are the DOM', () => { 
    render(<Navbar/>);
    const button = screen.getByRole('button', {name: /logout/i})
    const text = screen.getByRole('heading', {name: /context api/i})
    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
})


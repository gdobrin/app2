import * as React from "react";
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import ReducerBasics from './UseReducer';


test('clear button is in the DOM', () => { 
    render(<ReducerBasics/>);
    const button = screen.getByRole('button', {name: 'clear'})
    expect(button).toBeInTheDocument();
})

test('display 4 remove buttons', () => {
    render(<ReducerBasics/>);
    const button = screen.getAllByRole('button', {name: 'remove'})
    expect(button).toHaveLength(4);
})

test('clear button remove all names',  () => {
    render(<ReducerBasics/>);
    const button = screen.getByRole('button', {name: 'clear'})
    user.click(button)
    expect(() => screen.queryAllByRole('heading', {level: 4}).toThrow())
})

test('reset button works',  () => {
    render(<ReducerBasics/>);
    const button = screen.getByRole('button', {name: 'clear'})
    user.click(button)
    const resetButton = screen.getByRole('button', {name: 'reset'})
    user.click(resetButton)
    expect(() => screen.getAllByRole('heading', {level: 4}).toHaveLength(4))
})

test('remove buton works', () => {
    render(<ReducerBasics/>);
    const button = screen.getByTestId("0");
    user.click(button)
    expect(() => screen.queryByRole('heading', {name : /john/i }).toThrow())
})
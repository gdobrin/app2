import * as React from "react";
import { render, screen } from '@testing-library/react';
import UserContainer from "./UserContainer";
import { NavbarContext } from "./Navbar";
import Navbar from "./Navbar";

test(' "bob" is in the dom', () => { 
    const user = { name : 'bob'}

    render(
        <Navbar>
            <NavbarContext.Provider value={ user }>
                <UserContainer/>
            </NavbarContext.Provider>
        </Navbar>);

   
    const name =  screen.getByText(/bob/i);
    expect(name).toBeInTheDocument();
})
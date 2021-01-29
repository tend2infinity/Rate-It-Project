import React from 'react';
import {Header} from '../components';

export function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Inner>
                <Header.Logo to="/" src="/pictures/logo.png" />
                <Header.Button to="/signin">Sign In</Header.Button>
            </Header.Inner> 
            {children}
        </Header>
    )
}
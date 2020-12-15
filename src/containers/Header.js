import React from 'react';
import {Header} from '../components';

export function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Inner>
                <Header.Logo />
                <Header.Button />
            </Header.Inner>
            {children}
        </Header>
    )
}
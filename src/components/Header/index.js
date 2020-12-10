import React from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'
import {Background, Button, Container, Logo} from './styles/header'

export default function Header ({ bg=true, children, ...restProps })
{
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Inner = function HeaderInner({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Button = function HeaderButton({ children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}


Header.Logo = function HeaderLogo({ to, ...restProps}) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    ) 
}

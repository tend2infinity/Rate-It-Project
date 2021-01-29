import React from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'
import { Button, Inner, Logo , Innercomp} from './styles/header'

export default function HeaderBrowse ({ children, ...restProps })
{
    return {children};
}

HeaderBrowse.Inner = function HeaderInner({ children, ...restProps}){
    return <Inner {...restProps}>{children}</Inner>
}

HeaderBrowse.Innercomp = function HeaderInnercomp({
    children, ...restProps}){
        return <Innercomp {...restProps}>{children}</Innercomp>
}


HeaderBrowse.Button = function HeaderButton({ children, ...restProps}){
    return <Button {...restProps}>{children} </Button>
}


HeaderBrowse.Logo = function HeaderLogo({ to, ...restProps}) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    ) 
}

import React from 'react'
import {Container, Title, SubTitle, Link, Input, Submit, Base,Error} from './styles/Form'

export default function Form({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
};

Form.Error = function FormError({ children, ...restProps}) {
    return <Error {...restProps}>{children}</Error>;
};

Form.Title = function FormTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
};
Form.SubTitle= function FormSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>
        {children}
    </SubTitle>
};


Form.Link= function FormLink({children, ...restProps}){
    return <Link {...restProps}> {children}</Link>
};
Form.Input= function FormInput({ ...restProps}){
    return <Input {...restProps} />
};
Form.Submit= function FormSubmit({children, ...restProps}){
    return <Submit {...restProps}> {children}</Submit>
};
Form.Base= function FormBase({children, ...restProps}){
    return <Base {...restProps}> {children}</Base>
};







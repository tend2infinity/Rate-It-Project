import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom'
import { FooterContainer } from '../containers/Footer';
import { HeaderContainer2 } from '../containers/Header2'
import { Form } from '../components'
import { useAuth } from "../context/authContext"
export default function Signin() {
    const { signin } = useAuth(); 
    const history = useHistory();
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [error, setError] = useState('');

     // for checking valid email and pass
    const isInvalid = password === '' || email === '';
    async function handleSignin (event) {
        event.preventDefault(); 
            setError("")
            await signin(email, password)
            .then( () => {
                console.log("route changed");
                history.push("/browse")
            })
            .catch((error) => {
            setEmail('');
            setPassword('');
            setError(error.message);
            })
    }

 return( 
<>
    <HeaderContainer2>
        <Form>
            <Form.Title>Sign In </Form.Title>
            {error && <Form.Error> {error} </Form.Error>}
            <Form.Base onSubmit={handleSignin} method="POST"> 
            <Form.Input
            placeholder="Email address"
            value={email}
            onChange={({ target }) => setEmail( target.value)}
            />
            <Form.Input
            type="password"
            autoComplete="off"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword( target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">SignIn and proceed to Browse</Form.Submit>
            </Form.Base>
            <Form.SubTitle>
                New to Rate-It ? <Form.Link to="/signup"> Click here to SignUp</Form.Link>
            </Form.SubTitle>
        </Form>
    </HeaderContainer2>
    <FooterContainer />
</>
 
 )}
import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom'
import { FooterContainer } from '../containers/Footer';
import { HeaderContainer2 } from '../containers/Header2'
import { Form } from '../components'
import { useAuth } from "../context/authContext"

export default function Signup() {
    const { signup } = useAuth();
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    

    // for checking valid email and pass
    const isInvalid = firstName === ''|| password === '' || email === '';

    async function handleSignup(event) {
        event.preventDefault();
            setError("")
            await signup(email, password)
            .then((result) => {
                console.log(result)
                result.user.updateProfile({
                    displayName: firstName,
                })
                .then(() =>{
                    history.push("/browse")
                    console.log(result);
                })
            }).catch((error) => {
                setFirstName('');
                setEmail('');
                setPassword('');
                setError(error.message);
            })
            
            
        }
        // catch(error){

        // }
        // firebase
        // .auth()
        // .createUserWithEmailAndPassword(email,password)
        // .then((result)=> 
        //     result.user.updateProfile({
        //         displayName: firstName,
        //     })
           
        //     .then(() =>{
        //         history.push("/")
        //         console.log(result);
        //     })
        // )
        // .catch((error) => {
        //     setFirstName('');
        //     setEmail('');
        //     setPassword('');
        //     setError(error.message);
        // })
       

    
 return( 
    <>
    <HeaderContainer2>
        <Form>
            <Form.Title>Sign Up </Form.Title>
            {error && <Form.Error> {error} </Form.Error>}
            <Form.Base onSubmit={handleSignup} method="POST"> 
            <Form.Input
            placeholder="First name"
            value={firstName}
            onChange={({ target }) => setFirstName( target.value)}
            />
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
            <Form.Submit disabled={isInvalid} type="submit">SignUp and register yourself</Form.Submit>
            </Form.Base>
            <Form.SubTitle>
                Already a member ? <Form.Link to="/signin"> Click here to SignIn</Form.Link>
            </Form.SubTitle>
        </Form>
    </HeaderContainer2>
    <FooterContainer />
</>


 )
}

import {useState} from 'react';

import LoginButton from './LoginButton';

import LogoutButton from './LogoutButton';

import Greeting from './Greeting';

const LoginControl = () => {
    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    let button = (IsLoggedIn) ? <LogoutButton onClick={() => setIsLoggedIn(false)} /> : <LoginButton onClick={() => setIsLoggedIn(true)}/>
    
    return(
        <>
        <Greeting isLoggedIn= {IsLoggedIn}/>
        {button}
        </>
    )
}
export default LoginControl;
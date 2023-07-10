import React from 'react'
import cl from './Auth.module.sass'

export default function Auth() {
    return (
        <div id={cl.authorizationcl}>

            <div id={cl.greetingscl}>
                <img src="https://icon-library.com/images/neon-icon-png/neon-icon-png-16.jpg" alt="photo Label"></img>
                <p>Sign in to ...</p>
            </div>

            <div id={cl.userDatacl}>
                <div id={cl.logincl}>
                    <p> Login </p>
                    <input type="email" placeholder="Enter login" required />
                </div>
                <div id={cl.passwordcl}>
                    <p>Password</p>
                    <input type="password" placeholder="Enter password" required />
                </div>
                <div id={cl.buttonSignIncl}>
                    <button> Sign in </button>
                </div>
                <div id={cl.errorcl}>
                    <p> Error: </p>
                </div>
            </div>
        </div>
    )
}

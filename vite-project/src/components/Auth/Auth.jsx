import React, { useEffect, useRef, useState } from 'react'
import cl from './Auth.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useLocalStorage } from '@hooks/localStorage'

export default function Auth({ setAnimation, modalAuth, setModalAuth }) {
    const btn = useRef(null)

    const passwordSignInRef = useRef(null)
    const passwordAuthRef = useRef(null)

    const [auth, setAuth] = useState(false)

    const [loginSignIn, setLoginSignIn] = useState({ login: "" })
    const [loginAuth, setLoginAuth] = useState({ login: "" })

    const [passwordSignIn, setPasswordSignIn] = useState({ password: "" })
    const [passwordAuth, setPasswordAuth] = useState({ password: "" })

    const [name, setName] = useState({ name: "" })

    const [arrSave, setArrSave] = useLocalStorage('dataUser', { password: "", login: "" })

    function signIn() {
        if (loginSignIn.login == arrSave.login && passwordSignIn.password == arrSave.password) setModalAuth(false), setAnimation(true)
        else console.log('no no no')
    }

    function saveData() {
        if (passwordAuth.password.length && loginAuth.login.length && name.name.length >= 1 && loginAuth.login.includes("@")) {
            setArrSave({ password: passwordAuth.password, login: loginAuth.login, name: name.name })
            // setModalAuth(false)
        } else {
            console.log("no")
        }
    }

    const [icons, setIcon] = useState(true)
    const eyeFunc = (x) => {
        if (x === "signIn") {
            const type = passwordSignInRef.current.getAttribute("type") === "password" ? "text" : "password"
            passwordSignInRef.current.setAttribute("type", type)
        } else {
            const type = passwordAuthRef.current.getAttribute("type") === "password" ? "text" : "password"
            passwordAuthRef.current.setAttribute("type", type)
        }
    }

    return (
        <div>
            {modalAuth &&
                <div className={cl.authorization}>
                    {/* <span onClick={() => setModalAuth(false)} className={cl.blockAuth}></span> */}
                    <div>
                        {!auth
                            ? <div className={cl.userData}>
                                <span ref={btn} className={[cl.btn, cl.btnSignIn].join(' ')}> Sign in </span> <span style={{ fontSize: "29px" }}>/</span>
                                <span ref={btn} onClick={() => setAuth(true)} className={cl.btn}> Auth </span>
                                <div className={cl.login}>
                                    <label> Login </label>
                                    <input value={loginSignIn.login} onChange={e => setLoginSignIn({ ...loginSignIn, login: e.target.value })} minLength="5" maxLength="25" type="email" required />
                                </div>
                                <div className={cl.password}>
                                    <label> Password </label>
                                    <input ref={passwordSignInRef} value={passwordSignIn.password} onChange={e => setPasswordSignIn({ ...passwordSignIn, password: e.target.value })} maxLength="25" type="password" required />
                                    <FontAwesomeIcon onClick={() => { icons ? setIcon(false) : setIcon(true), eyeFunc("signIn") }} icon={icons ? faEyeSlash : faEye} />
                                </div>
                                <div className={cl.buttonAuth}>
                                    <button onClick={() => signIn()}> Sign in </button>
                                </div>
                            </div>
                            : <div className={cl.userData}>
                                <span onClick={() => setAuth(false)} className={cl.btn}> Sign in </span> <span style={{ fontSize: "29px" }}>/</span>
                                <span className={[cl.btn, cl.btnAuth].join(' ')}> Auth </span>
                                <div className={cl.login}>
                                    <label> Login </label>
                                    <input value={loginAuth.login} onChange={e => setLoginAuth({ ...loginAuth, login: e.target.value })} maxLength="25" type="email" required />
                                </div>
                                <div className={cl.password}>
                                    <label> Password </label>
                                    <input ref={passwordAuthRef} value={passwordAuth.password} onChange={e => setPasswordAuth({ ...passwordAuth, password: e.target.value })} maxLength="25" type="password" required />
                                    <FontAwesomeIcon onClick={() => { icons ? setIcon(false) : setIcon(true), eyeFunc("auth") }} icon={icons ? faEyeSlash : faEye} />
                                </div>
                                <div className={cl.name}>
                                    <label> Name </label>
                                    <input value={name.name} onChange={e => setName({ ...name, name: e.target.value })} maxLength="25" required />
                                </div>
                                <div className={cl.buttonAuth}>
                                    <button onClick={() => saveData()}> Auth </button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}
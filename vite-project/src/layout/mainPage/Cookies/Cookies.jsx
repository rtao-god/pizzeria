import React, { useEffect, useState } from 'react'
import cl from "./Cookies.module.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Cookies() {
    const [closeButton, setCloseButton] = useState(true)

    useEffect(() => {
        const data = window.localStorage.getItem('MY_APP_STATE')
        if (data !== null) setCloseButton(JSON.parse(data))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('MY_APP_STATE', JSON.stringify(closeButton))
    }, [closeButton])

    return (
        <div>
            {closeButton &&
                <div className={cl.container} >
                    <pre>
                        By continuing to browse the site, you agree to our use of cookies. To learn more or change your cookie settings, <a href="#">
                            click here </a>
                        <span className={cl.buttonClose} onClick={() => setCloseButton(false)} >
                            <FontAwesomeIcon icon={faXmark} />
                        </span>
                    </pre>
                </div>
            }
        </div>
    )
}

import React from 'react'
import cl from './Cookies.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useLocalStorage } from '@hooks/localStorage'

export default function Cookies() {
  const [closeButton, setCloseButton] = useLocalStorage('cookiesBanner', 'true')
  return (
    <div className={cl.container}>
      {closeButton == 'true' && (
        <pre>
          By continuing to browse the site, you agree to our use of cookies. To learn more or change your cookie
          settings, <a href="#">click here </a>
          <span className={cl.buttonClose} onClick={() => setCloseButton('false')}>
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </pre>
      )}
    </div>
  )
}

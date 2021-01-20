import React from 'react'
import {Link} from 'react-router-dom'

import logoutSvg from './logout.svg'
import './Logout.scss'

function Logout({additionalClass, logged, doctor}) {
    return (
        <>
            {!logged 
            ? <button className={`logout__btn ${additionalClass}`}>Выйти<img src={logoutSvg}/></button> 
            : <Link to='' className={`logout__login ${additionalClass}`}>Войти</Link>}
        </>
    )
}

export default Logout

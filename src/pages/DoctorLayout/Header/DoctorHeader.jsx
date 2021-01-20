import React from 'react'
import {Link} from 'react-router-dom'

import {Logout} from 'components'
import './DoctorHeader.scss'

function DoctorHeader() {
    return (
        <header className='doctor-header'>
            <div className="doctor-header__wrapper">
                <Link to='/doctor/cabinet' className='doctor-header__to-lk'>Личный кабинет</Link>
                <Logout additionalClass='doctor-header__logout'/>
            </div>
        </header>
    )
}

export default DoctorHeader

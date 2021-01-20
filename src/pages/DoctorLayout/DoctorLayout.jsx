import React from 'react'
import {Switch, Route} from 'react-router-dom'

import DoctorHeader from './Header/DoctorHeader'
import './DoctorLayout.scss'
import DoctorLK from './LK/DoctorLK'

function DoctorLayout() {
    return (
        <main className='doctor'>
            <DoctorHeader />
            <Switch>
                <Route path='/doctor/cabinet' component={DoctorLK} />
            </Switch>
        </main>
    )
}

export default DoctorLayout

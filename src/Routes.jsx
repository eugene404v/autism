import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {Auth, DoctorLayout, Testing} from 'pages'

function Routes() {
    return (
        <Switch>
            <Route path={"/testing"} component={Testing} />
            <Route path={['/login', '/signup']} component={Auth} />
            <Route path={"/doctor"} component={DoctorLayout} />
        </Switch>
    )
}

export default Routes

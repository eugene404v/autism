import React from 'react'
import {Route, Switch} from 'react-router-dom'

import './Auth.scss'
import AuthLogin from './AuthLogin'
import AuthSignup from './AuthSignup'

function Auth() {
    return (
        <Switch>
            <Route exact path={"/login"} component={AuthLogin} />
            <Route exact path={"/signup"} component={AuthSignup} />
        </Switch>
    )
}

export default Auth

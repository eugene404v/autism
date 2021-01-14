import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import TestingEntry from './TestingEntry';
import TestingInstruction from './TestingInstruction';
import TestingResult from './TestingResult';
import TestingStepWrapper from './TestingStepWrapper';
import TestingManual from './TestingManual';
import './Testing.scss'



function Testing() {
    return (
        <Switch>
            <Route exact path={"/testing/instruction"} component={TestingInstruction} />
            <Route exact path={"/testing/entry"} component={TestingEntry} />
            <Route path={"/testing/step"} component={TestingStepWrapper} />
            <Route exact path={"/testing/result"} component={TestingResult} />
            <Route exact path={"/testing/manual"} component={TestingManual} />
        </Switch>
    )
}

export default Testing
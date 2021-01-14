import React from 'react'
import { Switch, Route, useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

import TestingStep from './TestingStep'
import bgImg from './testingBg.svg'
import { setTestingStartTime, setTestingEndTime } from 'redux/reducers/testing';


function TestingStepWrapper() {
    const dispatch = useDispatch()
    const testingState = useSelector(state => state.testingReducer)
    const total = testingState.totalSteps
    const urlId = testingState.currentStep

    React.useEffect(() => {
        dispatch(setTestingStartTime(Date.now()))
    }, [dispatch])

    return (
        <section className="testing" style={{backgroundImage: `url(${bgImg})`}}>
            <p className="testing__percent">{(urlId) * 5}%</p>
            <div className="testing__bar testing__bar--outer">
                <div className="testing__bar testing__bar--inner" style={{width: `${(urlId) * 5}%`}}></div>
            </div>
            <p className="testing__pagination">{urlId} из {total}</p>
            <Switch>
                <Route exact path={"/testing/step/:id"} component={TestingStep} />
            </Switch>
        </section>
    )
}

export default TestingStepWrapper

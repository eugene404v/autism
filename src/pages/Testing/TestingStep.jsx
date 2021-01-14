import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {Radio} from 'antd'
import {useSelector, useDispatch} from 'react-redux';

import {setTestingStep, setTestingAnswer} from 'redux/reducers/testing'


function TestingStep() {
    const dispatch = useDispatch()
    const urlId = useParams().id
    const [selected, setSelected] = React.useState(false) 
    const nextId = Number(urlId) + 1 
    const {totalSteps, testingData} = useSelector(state => state.testingReducer)

    React.useEffect(()=> {
        setSelected(false)
        dispatch(setTestingStep(urlId))
    }, [urlId, dispatch])
    
    const radioHandler = (e) => {
        setSelected(true)
        dispatch(setTestingAnswer(urlId, e.target.value))
    }

    return (
        <div className='step'>
            <h2 className="step__question">{testingData[urlId-1].question}</h2>
            {testingData[urlId-1].example && <p className="step__example">{testingData[urlId-1].example}</p>}
            <div className="step__answers">
                <Radio.Group onChange={radioHandler} key={urlId+1}>
                    <Radio key={urlId+1} value={'yes'}> Да</Radio>
                    <Radio key={urlId+1.5} value={'no'}> Нет</Radio>
                </Radio.Group>
            </div> 
            <Link to={nextId<=totalSteps?`/testing/step/${nextId}`:'/testing/result'}>
                <button className="testing__btn" disabled={!selected}>
                    {nextId<=totalSteps?`Далее`:'Результаты теста'}
                </button>
            </Link>
        </div>
    )
}

export default TestingStep

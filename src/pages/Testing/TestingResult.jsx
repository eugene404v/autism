import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'

import { setTestingEndTime } from 'redux/reducers/testing';
import bgImg from './testingBg.svg'
import highImg from './high.svg'
import mediumImg from './medium.svg'
import lowImg from './low.svg'

function TestingResult() {
    const dispatch = useDispatch()
    const testingData = useSelector(state => state.testingReducer)

    React.useEffect(() => {
        dispatch(setTestingEndTime(Date.now())) 
    }, [dispatch])

    const resultContentSwitcher = (count) => {
        if (count>7) {
            return (
                <>
                    <p className="result__remember">Помните!</p>
                    <p className="result__disclaimer">Раннее выявление и своевременная квалифицированная помощь, программы раннего вмешательства могут значительно улучшить состояние ребенка и функционирование семьи.</p>
                    <h2 className="result__title result__title--high"><img src={highImg} />8-20. Высокий риск</h2>
                    <p className="result__subtitle">Рекомендовано немедленно обратиться за диагностикой и оценкой необходимости раннего вмешательства.</p>
                    <p className="result__text">Постановка диагноза «детский аутизм» и иных расстройств аутистического спектра – ответственность и компетенция детского психиатра-специалиста, прошедшего специальную профессиональную подготовку.</p>
                </>
            )
        } else if (count<8&&count>2) {
            return (
                <>  
                    <p className="result__remember">Помните!</p>
                    <p className="result__disclaimer">Раннее выявление и своевременная квалифицированная помощь, программы раннего вмешательства могут значительно улучшить состояние ребенка и функционирование семьи.</p>
                    <h2 className="result__title result__title--medium"><img src={mediumImg} />3-7. Средний риск</h2>
                    <p className="result__subtitle">Рекомендовано дальнейшее, более детальное обследование.</p>
                    <p className="result__text">Необходимо обсудить результаты теста с врачом педиатром, возможно использование дополнительного пошагового интервью (второй этап MCHAT-R/F) для получения дополнительной информации об ответах, указывающих на риск РАС.</p>
                </>
            )
        } else {
            return (
                <>
                    <h2 className="result__title result__title--low"><img src={lowImg} />0-2. Низкий риск</h2>
                    <p className="result__subtitle">Eсли ребёнок младше 24 месяцев, то проведите повторное тестирование по достижению им 2 лет.</p>
                    <p className="result__text">Никаких дополнительных действий не требуется, если наблюдение не выявляет риск РАС.</p>
                </>
            )
        }
    }

    return (
        <section className="testing result" style={{backgroundImage: `url(${bgImg})`}}>
            
            {resultContentSwitcher(testingData.answerCount)}
            <button className="testing__btn">Скачать результаты</button>
        </section>
    )
}

export default TestingResult

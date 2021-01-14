import React from 'react'
import { Link } from "react-router-dom";

import bgImg from './testingBg.svg'
import highImg from './high.svg'
import mediumImg from './medium.svg'
import lowImg from './low.svg'

function TestingManual() {
    return (
        <section className="testing manual" style={{backgroundImage: `url(${bgImg})`}}>
            <h2 className="testing__title testing__title--manual">Инструкция по использованию</h2>
            <p className="testing__subtitle testing__subtitle--manual">Алгоритм для подсчета результатов :</p>
            <ul className="testing__list">
                <li className="testing__algoritm">ответ "НЕТ" по всем пунктам, за исключением 2, 5 и 12, указывает на риск РАС;</li>
                <li className="testing__algoritm">ответ "ДА" для пунктов 2, 5 и 12 указывает на риск РАС.</li>
            </ul>
            <h2 className="testing__final-title">Следующий алгоритм максимизирует психометрические свойства MCHAT-R:</h2>
            <ul className="manual__list">
                <li className="manual__container">
                    <h3 className="manual__title">
                        <img src={lowImg} className="manual__icon"/>
                        <span className="manual__title--low">Количество баллов 0-2. Низкий риск.</span>
                    </h3>
                    <p className="manual__text">Если ребёнок младше 24 месяцев, то проведите повторное тестирование по достижению им 2 лет. Никаких дополнительных действий не требуется, если наблюдение не выявляет риск РАС.</p>
                </li>
                <li className="manual__container">
                    <h3 className="manual__title">
                        <img src={mediumImg} className="manual__icon"/>
                        <span className="manual__title--medium">Количество баллов 3-7. Средний риск.</span>
                    </h3>
                    <p className="manual__text">Необходимо обсудить результаты теста с врачом педиатром, возможно использование дополнительного пошагового интервью (второй этап MCHAT-R/F) для получения дополнительной информации об ответах, указывающих на риск РАС. Рекомендовано дальнейшее обследование.</p>
                </li>
                <li className="manual__container">
                    <h3 className="manual__title">
                        <img src={highImg} className="manual__icon"/>
                        <span className="manual__title--high">Количество баллов 8-20. Высокий риск.</span>
                    </h3>
                    <p className="manual__text">Рекомендовано немедленно обратиться за диагностикой и оценкой необходимости раннего вмешательства.</p>
                </li>
            </ul>
            <Link to='/testing/entry'><button className='testing__btn'>Я ознакомился (-лась)</button></Link>
        </section>
    )
}

export default TestingManual

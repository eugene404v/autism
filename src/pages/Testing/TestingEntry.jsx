import React from 'react'
import {Form, Input, DatePicker} from 'antd'
import { Link, useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import bgImg from './testingBg.svg'
import {clearTestingInfo, setTestingName} from 'redux/reducers/testing'

function TestingEntry() {
    const history = useHistory()
    const dispatch = useDispatch()

    const formHandler = (vals) => {
        dispatch(clearTestingInfo())
        dispatch(setTestingName(vals))
        history.push('/testing/step/1')
    }

    return (
        <section className="testing" style={{backgroundImage: `url(${bgImg})`}}>
            <h1 className="testing__title">Пожалуйста, введите данные пациента для прохождения теста</h1>
            <Form onFinish={formHandler} className={`testing__form`}>
                <Form.Item name='childName' rules={[{ required: true, message: 'Заполните поле!' }]}>
                    <Input placeholder='ФИО ребенка' size='large' className='testing__input' />
                </Form.Item>
                <Form.Item name='testDate' rules={[{ required: true, message: 'Заполните поле!' }]}>
                    <DatePicker placeholder='Укажите дату заполнения'  size='large' className='testing__date' />
                </Form.Item>
                <Form.Item name='birthDate' rules={[{ required: true, message: 'Заполните поле!' }]}>
                    <DatePicker placeholder='Укажите дату рождения'  size='large' className='testing__date'/>
                </Form.Item>
                <Form.Item name='familiarity' rules={[{ required: true, message: 'Заполните поле!' }]}>
                    <Input placeholder='Степень родства'  size='large' className='testing__input' />
                </Form.Item>
                <Form.Item name='parentName' rules={[{ required: true, message: 'Заполните поле!' }]}>
                    <Input placeholder='ФИО родителя'  size='large' className='testing__input' />
                </Form.Item>
                <button className='testing__btn'>Начать тест</button>
            </Form>
                <p className={`testing__or-anon`}>или</p>
            <Link to='/testing/step/1' className='testing__anon'>Пройти тест анонимно </Link>
        </section>
    )
}

export default TestingEntry

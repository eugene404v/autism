import React from 'react'
import {Form, Input, Button} from 'antd'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import { userSignup } from 'redux/reducers/auth'

function AuthSignup() {
    const dispatch = useDispatch()

    const signupHandler = (vals) => {
        dispatch(userSignup(vals))
    }

    return (
        <section className="auth">
            <h1 className="auth__title">Зарегистрируйтесь</h1>
            <div className="auth__container">
                <Form onFinish={signupHandler}>
                    <Form.Item name='login'>
                        <Input placeholder='login' />
                    </Form.Item>
                    <Form.Item name='password'>
                        <Input.Password visibilityToggle={true} placeholder='password' />
                    </Form.Item>
                    <Form.Item name='password2'>
                        <Input.Password visibilityToggle={true} placeholder='repeat password' />
                    </Form.Item>
                    <Button htmlType='submit' type='primary' className='auth__btn'>Зарегистрироваться</Button>
                </Form>
                <Link to='/login'>Войти</Link>
            </div>
        </section>
    )
}

export default AuthSignup

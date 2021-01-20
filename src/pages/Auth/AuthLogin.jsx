import React from 'react'
import {Form, Input, Button} from 'antd'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { userLogin } from 'redux/reducers/auth'



function AuthLogin() {
    const dispatch = useDispatch()

    const loginHandler = (vals) => {
        dispatch(userLogin(vals))
    }

    return (
        <section className="auth">
            <h1 className="auth__title">Войдите</h1>
            <div className="auth__container">
                <Form onFinish={loginHandler}>
                    <Form.Item name='login'>
                        <Input placeholder='login' />
                    </Form.Item>
                    <Form.Item name='password'>
                        <Input.Password visibilityToggle={true} placeholder='password' />
                    </Form.Item>
                    <Button htmlType='submit' type='primary' className='auth__btn'>Войти</Button>
                </Form>
                <Link to='/signup'>Зарегистрироваться</Link>
            </div>
        </section>
    )
}

export default AuthLogin

import axios from 'axios'

import jsonFormater from 'redux/helpers/jsonToFormdata'

const initialState = {
    wasRegistred: false
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                login: action.data.login //id, name localstorage initialstate
            }  
        default:    
            return state
    }
}

export const setUserLogin = (data) => {
    return {
        type: 'USER_LOGIN',
        data
    }
}

export const setUserSignup = () => {
    return {
        type: 'USER_SIGNUP',
    }
}

export const setUserLogout = () => {
    return {
        type: 'USER_LOGOUT'
    }
}

export const userLogin = (vals) => (dispatch) => {
    axios.post('/',jsonFormater(vals), {headers: {
        accept: 'text/json'
    }})
    .then(resp => {
        dispatch(setUserLogin(resp.data))
    })
}

export const userSignup = (vals) => (dispatch) => {
    axios.post('/',jsonFormater(vals), {headers: {
        accept: 'text/json'
    }})
    .then(resp => {
        dispatch(setUserSignup(resp.data))
    })
}

export const userLogout = (vals) => (dispatch) => {
    axios.post('/','',{headers: {
        accept: 'text/json'
    }})
    .then(resp => {
        dispatch(setUserLogout(resp.data))
    })
}
 
export default authReducer
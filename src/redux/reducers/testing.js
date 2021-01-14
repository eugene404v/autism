import {data as testingData} from './testingData'

const initialState = {
    testingData: [...testingData],
    totalSteps: testingData.length,
    currentStep: 1,
    anon: true,
    answers: [],
    answerCount: 0
}

const testingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TESTING_STEP':
            return {
                ...state,
                currentStep: action.urlId
            }
        case 'SET_TESTING_START_TIME':
            return {
                ...state,
                timeStart: action.time
            }
        case 'SET_TESTING_END_TIME':
            return {
                ...state,
                timeEnd: action.time,
                timeAll: action.time - state.timeStart
            }
        case 'SET_TESTING_ANSWER':
            const tempArr = [...state.answers]
            tempArr[action.id-1] = action.answer
            
            return {
                ...state,
                answers: tempArr,
                answerCount: state.answerCount + Number(state.testingData[action.id-1][action.answer])
            }
        case 'CLEAR_TESTING_INFO':
            return {
                ...state,
                timeEnd: 0,
                timeStart: 0,
                timeAll: 0,
                answerCount: 0,
                anon: true,
                currentStep: 1,
                answers: [],

            }
        case 'SET_TESTING_NAME':
            return {
                ...state,
                anon: false,
                childName: action.values.childName,
                testDate: action.values.testDate,
                birthDate: action.values.birthDate,
                familiarity: action.values.familiarity,
                parentName: action.values.parentName,
            }    
        default:    
            return state
    }
}

export const setTestingStep = (urlId) => {
    return {
        type: 'SET_TESTING_STEP',
        urlId
    }
}

export const setTestingStartTime = (time) => {
    return {
        type: 'SET_TESTING_START_TIME',
        time
    }
}

export const setTestingEndTime = (time) => {
    return {
        type: 'SET_TESTING_END_TIME',
        time
    }
}

export const setTestingAnswer = (id, answer) => {
    return {
        type: 'SET_TESTING_ANSWER',
        id,
        answer
    }
}

export const clearTestingInfo = () => {
    return {
        type: 'CLEAR_TESTING_INFO'
    }
}

export const setTestingName = (values) => {
    return {
        type: 'SET_TESTING_NAME',
        values
    }
}

export default testingReducer
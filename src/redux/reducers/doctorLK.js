const initialState = { //isLoaded:false(for preloader), name, job, experience, category, scienceStatus
    period: 'month',
    dataMonth: [
        { name: 'всего пациентов', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
    ],
    dataYear: [
        { name: 'всего пациентов', value: 12121 },
        { name: 'A2', value: 4223 },
        { name: 'B1', value: 11111 },
        { name: 'B2', value: 1212 },
    ],
    currentData: [
        { name: 'всего пациентов', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
    ],
}

const doctorLkReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DOCTOR_SET_STATS_PERIOD':
            const tempData = action.period === 'month' ? state.dataMonth : state.dataYear
            return {
                ...state,
                period: action.period,
                currentData: tempData
            }
        default:
            return state
        }
}

export const setStatsPeriod = (period) => {
    return {
        type: 'DOCTOR_SET_STATS_PERIOD',
        period
    }
}

export default doctorLkReducer
const SET_COUNT = 'SET_COUNT'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_START_VALUE = 'SET_START_VALUE'
const VALUE_SET_BUTTON = 'VALUE_SET_BUTTON'
const SET_ERROR = 'SET_ERROR'

type CounterType = {
    count: number
    maxValue: number
    startValue: number
    vauleSetButton: boolean
    error: boolean
}

const initialState: CounterType = {
    count: 0,
    maxValue: 5,
    startValue: 0,
    vauleSetButton: true,
    error: false
}

export const counterReducer = (state = initialState, action: ActionsType): CounterType => {
    switch (action.type) {
        case "SET_COUNT":
            return {
                ...state,
                count: action.newCount
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.setError
            }
        case "SET_MAX_VALUE":
            return {
                ...state,
                maxValue: action.newMaxValue
            }
        case "SET_START_VALUE":
            return {
                ...state,
                startValue: action.newStartValue
            }
        case "VALUE_SET_BUTTON":
            return {
                ...state,
                vauleSetButton: action.isValue
            }
        default:
            return state
    }
}

type SetCountType = ReturnType<typeof setCountAC>
type SetMaxValueType = ReturnType<typeof setMaxValueAC>
type SetStartValueType = ReturnType<typeof setStartValueAC>
type SetVauleSetButtonType = ReturnType<typeof setVauleSetButtonAC>
type SetErrorType = ReturnType<typeof setErrorAC>

type ActionsType = SetCountType
    | SetMaxValueType
    | SetStartValueType
    | SetVauleSetButtonType
    | SetErrorType

export const setCountAC = (newCount:number) => {
    return {type: SET_COUNT, newCount} as const
}
export const setMaxValueAC = (newMaxValue: number) => {
    return {type: SET_MAX_VALUE, newMaxValue} as const
}
export const setStartValueAC = (newStartValue: number) => {
    return {type: SET_START_VALUE, newStartValue} as const
}
export const setVauleSetButtonAC = (isValue:boolean) => {
    return {type: VALUE_SET_BUTTON, isValue} as const
}
export const setErrorAC = (setError:boolean) => {
    return {type: SET_ERROR, setError} as const
}
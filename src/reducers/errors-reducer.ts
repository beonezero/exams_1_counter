const initialState = {
    error: "",
    errorMaxInput: "",
    errorMinInput: ""
}

// reducer
export const errorsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-COUNT":
            return {...state, error: action.error}
        case "SET-ERROR-MIN-INPUT":
            return {...state, errorMinInput: action.errorMinInput}
        case "SET-ERROR-MAX-INPUT":
            return {...state, errorMaxInput: action.errorMaxInput}
        default:
            return state
    }
}

// actions
export const setErrorAC = (error: string) => ({type: "SET-COUNT", error} as const)
export const setErrorMinInputAC = (errorMinInput: string) => ({type: "SET-ERROR-MIN-INPUT", errorMinInput} as const)
export const setErrorMaxInputAC = (errorMaxInput: string) => ({type: "SET-ERROR-MAX-INPUT", errorMaxInput} as const)

// types

type InitialStateType = typeof initialState
type ActionType =
    ReturnType<typeof setErrorAC>
    | ReturnType<typeof setErrorMinInputAC>
    | ReturnType<typeof setErrorMaxInputAC>




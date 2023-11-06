
const initialState = {
    count: 0,
    minValue: 0,
    maxValue: 0
}

type InitialStateType = typeof initialState
type ActionType = ReturnType<typeof setCountAC> | ReturnType<typeof incrementCountAC> | ReturnType<typeof setMinValueAC> | ReturnType<typeof setMaxValueAC>

console.log("reducer")
export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type){
        case "SET-COUNT": return {...state, count: action.count}
        case "INCREMENT-COUNT": return {...state, count: (action.count + 1)}
        case "SET-MIN-VALUE": return {...state, minValue: action.minValue}
        case "SET-MAX-VALUE": return {...state, maxValue: action.maxValue}
        default: return state
    }
}
export const setCountAC = (count: number) => ({type: "SET-COUNT", count } as const)
export const incrementCountAC = (count: number) => ({type: "INCREMENT-COUNT", count} as const)
export const setMinValueAC = (minValue: number) => ({type: "SET-MIN-VALUE", minValue} as const)
export const setMaxValueAC = (maxValue: number) => ({type: "SET-MAX-VALUE", maxValue} as const)
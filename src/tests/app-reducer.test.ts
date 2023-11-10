import {
    appReducer,
    incrementCountAC,
    InitialStateType,
    setCountAC,
    setMaxValueAC,
    setMinValueAC
} from "../reducers/app-reducer";

let startState: InitialStateType;
beforeEach(() => {
    startState = {
        count: 0,
        minValue: 0,
        maxValue: 0
    };
});

test("set count", () => {
    const action = setCountAC(3);

    const endState = appReducer(startState, action)

    expect(endState.count).toBe(3);
});

test("increment count", () => {
    const action = incrementCountAC(3);

    const endState = appReducer(startState, action)

    expect(endState.count).toBe(4);
});

test("set MIN value", () => {
    const action = setMinValueAC(7);

    const endState = appReducer(startState, action)

    expect(endState.minValue).toBe(7);
});

test("set MAX value", () => {
    const action = setMaxValueAC(4);

    const endState = appReducer(startState, action)

    expect(endState.maxValue).toBe(4);
});
import {
    errorsReducer,
    InitialStateErrorsType,
    setErrorAC,
    setErrorMaxInputAC,
    setErrorMinInputAC
} from "../reducers/errors-reducer";

let startState: InitialStateErrorsType;
beforeEach(() => {
    startState = {
        error: "",
        errorMaxInput: "",
        errorMinInput: ""
    };
});

test("set count error", () => {
    const action = setErrorAC("Please, save settings");

    const endState = errorsReducer(startState, action)

    expect(endState.error).toBe("Please, save settings");
});

test("set min error", () => {
    const action = setErrorMinInputAC("Min error");

    const endState = errorsReducer(startState, action)

    expect(endState.errorMinInput).toBe("Min error");
});

test("set max error", () => {
    const action = setErrorMaxInputAC("Max error");

    const endState = errorsReducer(startState, action)

    expect(endState.errorMaxInput).toBe("Max error");
});

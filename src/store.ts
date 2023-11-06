import {combineReducers, legacy_createStore} from "redux";
import {appReducer} from "./reducers/app-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {errorsReducer} from "./reducers/errors-reducer";

const rootState = combineReducers({
    app: appReducer,
    errors: errorsReducer
})

type RootStateType = ReturnType<typeof rootState>

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export const store = legacy_createStore(rootState)
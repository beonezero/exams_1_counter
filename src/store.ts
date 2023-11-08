import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {appReducer} from "./reducers/app-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {errorsReducer} from "./reducers/errors-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {loadState, saveState} from "./utils/localstorage-utils";

const rootState = combineReducers({
    app: appReducer,
    errors: errorsReducer
})
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export const store = legacy_createStore(rootState, loadState() ,applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        app: store.getState().app,
        errors: store.getState().errors
    })
})

//types
export type RootStateType = ReturnType<typeof rootState>
export type AppThunkDispatch = ThunkDispatch<RootStateType, any, AnyAction>
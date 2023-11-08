import {Counter} from "./components/Counter";
import {CounterSettings} from "./components/CounterSettings";
import s from "./App.module.css";
import {useAppDispatch, useAppSelector} from "./store";
import {
    incrementCountAC,
    setCountAC,
    setMaxValueAC,
    setMinValueAC,
} from "./reducers/app-reducer";
import {setErrorAC, setErrorMaxInputAC, setErrorMinInputAC} from "./reducers/errors-reducer";

function App() {

    const dispatch = useAppDispatch()

    const count = useAppSelector((state) => state.app.count)
    const minValue = useAppSelector((state) => state.app.minValue)
    const maxValue = useAppSelector((state) => state.app.maxValue)

    const error = useAppSelector((state) => state.errors.error)
    const errorMinInput = useAppSelector((state) => state.errors.errorMinInput)
    const errorMaxInput = useAppSelector((state) => state.errors.errorMaxInput)

    // useEffect(() => {
    //     dispatch(setMinValueFromLocalstorageTC())
    //     dispatch(setMaxValueFromLocalstorageTC())
    // },[])

    const saveMaxMinValue = () => {
        dispatch(setErrorAC(""))
        dispatch(setCountAC(minValue))
    }
    const resetCounter = () => {
        dispatch(setCountAC(minValue))
    }

    const incCounter = () => {
        dispatch(incrementCountAC(count))
    }

    const changeMaxValue = (e: string) => {
        dispatch(setErrorAC("Please, save settings"))
        dispatch(setMaxValueAC(Number(e)))
        // dispatch(saveMaxValueToLocalstorageTC())
    }
    const changeMinValue = (e: string) => {
        dispatch(setErrorAC("Please, save settings"))
        dispatch(setMinValueAC(Number(e)))
        // dispatch(saveMinValueToLocalstorageTC())
    }
    const minEqualMaxErrorChecking = () => {
        if (minValue === maxValue || (maxValue < 0 && minValue < 0)) {
            dispatch(setErrorMinInputAC("Min error"))
            dispatch(setErrorMaxInputAC("Max error"))
            dispatch(setErrorAC("Incorrected value"))
        } else if ((minValue < 0 && maxValue >=0) || (minValue > 0 && maxValue >=0 && minValue > maxValue)) {
            dispatch(setErrorAC("Incorrected min value"))
            dispatch(setErrorMinInputAC("Min error"))
            dispatch(setErrorMaxInputAC(""))
        } else if (maxValue < 0 && minValue >=0) {
            dispatch(setErrorAC("Incorrected max value"))
            dispatch(setErrorMinInputAC(""))
            dispatch(setErrorMaxInputAC("Max error"))
        } else if (maxValue >=0 && minValue >=0 && maxValue > minValue) {
            dispatch(setErrorMinInputAC(""))
            dispatch(setErrorMaxInputAC(""))
        }
    }

    return <div className={s.Wrapper}>
        <CounterSettings minValue={minValue}
                         maxValue={maxValue}
                         error={error}
                         errorMaxInput={errorMaxInput}
                         errorMinInput={errorMinInput}
                         saveMaxMinValue={saveMaxMinValue}
                         changeMaxValue={changeMaxValue}
                         changeMinValue={changeMinValue}
                         minEqualMaxErrorChecking={minEqualMaxErrorChecking}
        />
        <Counter count={count}
                 minValue={minValue}
                 maxValue={maxValue}
                 error={error}
                 resetCounter={resetCounter}
                 incCounter={incCounter}
        />
    </div>
}

export default App;

import React, {useState} from "react"
import {Counter} from "./components/Counter";
import {CounterSettings} from "./components/CounterSettings";
import s from "./App.module.css"

function App() {
    const [count, setCount] = useState<number>(0)
    const [maxCountValue, setMaxCountValue] = useState<number>(5)
    const [minCountValue, setMinCountValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    const [error, setError] = useState<string>("")
    const [errorMinInput, setErrorMinInput] = useState<string>("")
    const [errorMaxInput, setErrorMaxInput] = useState<string>("")

    const saveMaxMinValue = () => {
            setError("")
            setMaxCountValue(maxValue)
            setCount(minValue)
            setMinCountValue(minValue)
    }

    return <div className={s.Wrapper}>
        <CounterSettings minValue={minValue}
                         maxValue={maxValue}
                         errorMinInput={errorMinInput}
                         errorMaxInput={errorMaxInput}
                         setMaxValue={setMaxValue}
                         saveMaxMinValue={saveMaxMinValue}
                         setError={setError}
                         setErrorMinInput={setErrorMinInput}
                         setErrorMaxInput={setErrorMaxInput}
                         setMinValue={setMinValue}
                         error={error}
        />
        <Counter count={count}
                 setCount={setCount}
                 maxCountValue={maxCountValue}
                 minCountValue={minCountValue}
                 error={error}
                 setError={setError}
        />
    </div>
}

export default App;

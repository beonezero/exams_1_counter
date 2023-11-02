import s from "./Counter.module.css"

export type CounterType = {
    count: number
    maxCountValue: number
    minCountValue: number
    setCount: (value: number) => void
    error: string
    setError: (error: string) => void
}

export const Counter = (props: CounterType) => {
    const incButtonHandler = () => {
        props.setCount(props.count + 1)
    }

    const resetButtonHandler = () => {
        props.setCount(props.minCountValue)
    }

    return <div className={s.background}>
        <div className={s.wrapper}>
            <div className={s.table}>
                {props.error
                    ? <div className={s.error}>{props.error}</div>
                    : <div
                        className={`${s.table_counter} ${props.count === props.maxCountValue ? s.table_counter_red : ""}`}>{props.count}</div>
                }
            </div>
            <div className={s.buttons}>
                <button onClick={incButtonHandler} className={s.incButton}
                        disabled={props.count === props.maxCountValue || !!props.error}>INC
                </button>
                <button onClick={resetButtonHandler} disabled={props.count === props.minCountValue || !!props.error}
                        className={s.resetButton}>RESET
                </button>
            </div>
        </div>
    </div>
}
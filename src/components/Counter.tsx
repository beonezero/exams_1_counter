import s from "./Counter.module.css"
import {Button} from "./Button/Button";

export type CounterType = {
    count: number
    maxValue: number
    minValue: number
    error: string
    resetCounter: () => void
    incCounter: () => void
}

export const Counter = (props: CounterType) => {
    const incButtonHandler = () => {
        props.incCounter()
    }

    const resetButtonHandler = () => {
        props.resetCounter()
    }

    return <div className={s.background}>
        <div className={s.wrapper}>
            <div className={s.table}>
                {props.error
                    ? <div className={props.error === "Please, save settings" ? s.error_green : s.error}>{props.error}</div>
                    : <div
                        className={`${s.table_counter} ${props.count === props.maxValue ? s.table_counter_red : ""}`}>{props.count}</div>
                }
            </div>
            <div className={s.buttons}>
                <Button onclickHandler={incButtonHandler}
                        disabled={props.count === props.maxValue || !!props.error}
                        name={"INC"}
                />
                <Button onclickHandler={resetButtonHandler}
                        disabled={props.count === props.minValue || !!props.error}
                        name={"RESET"}
                />
            </div>
        </div>
    </div>
}
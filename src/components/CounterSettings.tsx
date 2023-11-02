import s from "./CounterSettings.module.css";
import {ChangeEvent} from "react";

export type CounterSettingsType = {
    minValue: number
    maxValue: number
    error: string
    errorMinInput: string
    errorMaxInput: string
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    saveMaxMinValue: () => void
    setError: (error: string) => void
    setErrorMinInput: (minError: string) => void
    setErrorMaxInput: (minError: string) => void
}

export const CounterSettings = (props: CounterSettingsType) => {

    const maxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
        props.setError("Please, save settings")
    }

    const minInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(Number(e.currentTarget.value))
        props.setError("Please, save settings")
    }

    if(props.minValue < 0){
        props.setErrorMinInput("minError")
        props.setError("Incorrect input")
    } else {
        props.setErrorMinInput("")
    }

    if(props.maxValue < 0){
        props.setErrorMaxInput("maxError")
        props.setError("Incorrect input")
    } else {
        props.setErrorMaxInput("")
    }

    if (props.minValue >= props.maxValue) {
        props.setError("Incorrect input")
        props.setErrorMaxInput("maxError")
        props.setErrorMinInput("minError")
    }

    const setButtonHandler = () => {
        props.saveMaxMinValue()
    }

    return <div className={s.background_settings}>
        <div className={s.wrapper_settings}>
            <div className={s.table_settings}>
                <div className={s.table_Group}>
                    <div className={s.table_title}>max value:</div>
                    <div><input onChange={maxInputChangeHandler}
                                value={props.maxValue}
                                type={"number"} className={`${s.input} ${props.errorMaxInput ? s.inputError : ""}`}/></div>
                </div>
                <div className={s.table_Group}>
                    <div className={s.table_title}>min value:</div>
                    <div><input onChange={minInputChangeHandler}
                                value={props.minValue} type={"number"} className={`${s.input} ${props.errorMinInput ? s.inputError : ""}`}/></div>
                </div>
            </div>
            <div className={s.buttons_settings}>
                <button className={s.buttonSet} onClick={setButtonHandler} disabled={!props.error || !!props.errorMinInput || !!props.errorMaxInput}>SET</button>
            </div>
        </div>
    </div>
}
import s from "./CounterSettings.module.css";
import {ChangeEvent} from "react";
import {Button} from "./Button/Button";

export type CounterSettingsType = {
    minValue: number
    maxValue: number
    error: string
    errorMaxInput: string
    errorMinInput: string
    saveMaxMinValue: () => void
    minEqualMaxErrorChecking: () => void
    changeMaxValue: (e: string) => void
    changeMinValue: (e: string) => void
}

export const CounterSettings = (props: CounterSettingsType) => {

    const maxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(e.currentTarget.value)
    }

    const minInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMinValue(e.currentTarget.value)
    }

    props.minEqualMaxErrorChecking() //проверка value

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
                                type={"number"} className={`${s.input} ${props.errorMaxInput ? s.inputError : ""}`}/>
                    </div>
                </div>
                <div className={s.table_Group}>
                    <div className={s.table_title}>min value:</div>
                    <div><input onChange={minInputChangeHandler}
                                value={props.minValue} type={"number"}
                                className={`${s.input} ${props.errorMinInput ? s.inputError : ""}`}/></div>
                </div>
            </div>
            <div className={s.buttons_settings}>
                <Button onclickHandler={setButtonHandler}
                        disabled={!!props.errorMaxInput || !!props.errorMinInput || !props.error}
                        name={"SET"}
                />
            </div>
        </div>
    </div>
}
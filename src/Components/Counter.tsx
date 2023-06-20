import React, {ChangeEvent, useState} from 'react';
import s from "./Counter.module.css"

type CounterType = {
    count: number
    changeCount: (counts: number) => void
}


const Counter = (props: CounterType) => {
    const [maxCount, setMaxCount] = useState(0)
    const [minCount, setMinCount] = useState(0)
    const [settings, setSettings] = useState<boolean>(false)
    const onClickIncHandler = () => {
        if (props.count < maxCount) {
            props.changeCount(props.count + 1)
        }
    }
    const onClickResetHandler = () => {
        props.changeCount(minCount)
    }

    const onClickSetHandler = () => {
        setSettings(!settings)
        setMaxCount(maxCount)
        props.changeCount(minCount)
    }

    const onChangeInputMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
         setMaxCount(Number(e.currentTarget.value))
    }

    const onChangeInputMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinCount(Number(e.currentTarget.value))
    }

    const checkCountMax = props.count === maxCount
    const checkCountMin = props.count === minCount

    return (
        <div className={s.counter_wrapper}>
            <div className={s.counter}>
                {settings
                    ? <div className={s.table_wrapper}>
                        <p className={checkCountMax ? s.number : ""}>{props.count}</p>
                    </div>
                    : <div className={s.settings}>
                        <div className={s.settings_block}><p>max value:</p> <input type="number"
                                                                                   onChange={onChangeInputMaxHandler}
                                                                                    value={maxCount}
                        />
                        </div>
                        <div className={s.settings_block}><p>start value:</p> <input type="number"
                                                                                     onChange={onChangeInputMinHandler}
                                                                                     className={s.error_input}
                                                                                     value={minCount}
                        /></div>
                    </div>
                }
                {settings
                    ? <div className={s.button_wrapper}>
                        <button className={checkCountMax ? s.button : ""}
                                onClick={onClickIncHandler}
                                disabled={checkCountMax}>inc
                        </button>
                        <button className={checkCountMin ? s.button : ""}
                                onClick={onClickResetHandler}
                                disabled={checkCountMin}>reset
                        </button>
                        <button onClick={onClickSetHandler}>set
                        </button>
                    </div>
                    : <div className={s.button_wrapper}>
                        <button onClick={onClickSetHandler}>set
                        </button>
                    </div>

                }
            </div>
        </div>
    );
};

export default Counter;
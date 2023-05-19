import React from 'react';
import s from "./Counter.module.css"

type CounterType = {
    count: number
    changeCount: (counts: number) => void
}


const Counter = (props: CounterType) => {
    const onClickIncHandler = () => {
        if (props.count < 5) {
            props.changeCount(props.count + 1)
        }
    }
    const onClickResetHandler = () => {
        props.changeCount(0)
    }
    const checkCountFive = props.count === 5
    const checkCountFZero = props.count === 0
    return (
        <div className={s.counter_wrapper}>
            <div className={s.counter}>
                <div className={s.table_wrapper}>
                    <p className={checkCountFive ? s.number : ""}>{props.count}</p>
                </div>
                <div className={s.button_wrapper}>
                    <button className={checkCountFive ? s.button : ""}
                            onClick={onClickIncHandler}
                            disabled={checkCountFive}>inc
                    </button>
                    <button className={checkCountFZero ? s.button : ""}
                            onClick={onClickResetHandler}
                            disabled={checkCountFZero}>reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
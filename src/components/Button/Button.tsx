import s from "./Button.module.css"

type ButtonType = {
    name: string
    onclickHandler: () => void
    disabled: boolean
}

export const Button = (props: ButtonType) => {
    return <>
        <button className={s.default} onClick={props.onclickHandler} disabled={props.disabled}>{props.name}</button>
    </>
}
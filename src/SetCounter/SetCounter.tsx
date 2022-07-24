import React, {ChangeEvent} from 'react';
import s from './SetCounter.module.css';

export type SetCounterType = {
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    onClickSet: () => void
    setVauleSetButton: (value: boolean) => void
    vauleSetButton: boolean
    incorrectValueCallBack: () => void
    error: boolean
    setError: (value: boolean) => void
}

const SetCounter = (props: SetCounterType) => {

    const classNameCount = `${s.count}`
    const classNameInput = `${s.setCounterInput} ${props.error ? s.error : ''}`

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {

        if (+e.currentTarget.value > props.startValue) {
            props.setMaxValue(+e.currentTarget.value)
            props.setVauleSetButton(false)
            props.setError(false)
        } else {
            props.setMaxValue(+e.currentTarget.value)
            props.incorrectValueCallBack()
        }
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if(+e.currentTarget.value < props.maxValue && +e.currentTarget.value >= 0){
            props.setStartValue(+e.currentTarget.value)
            props.setVauleSetButton(false)
            props.setError(false)
        }else{
            props.setStartValue(+e.currentTarget.value)
            props.incorrectValueCallBack()
        }
    }

    return (
        <div className={s.counter}>
            <div className={s.buttons}>
                max value: <input className={classNameInput} type={"number"} value={props.maxValue} onChange={onChangeMaxValue}/>
                start value: <input className={classNameInput} type={"number"} value={props.startValue} onChange={onChangeStartValue}/>
            </div>
            <div className={classNameCount}>
                <button className={s.button} onClick={props.onClickSet} disabled={props.vauleSetButton}>set
                </button>
            </div>
        </div>
    );
};

export default SetCounter;
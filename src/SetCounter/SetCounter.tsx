import React, {ChangeEvent} from 'react';
import s from './SetCounter.module.css';
import {useDispatch} from "react-redux";
import {setErrorAC, setMaxValueAC, setStartValueAC, setVauleSetButtonAC} from "../redux/counterReducer";

export type SetCounterType = {
    maxValue: number
    startValue: number
    onClickSet: () => void
    vauleSetButton: boolean
    incorrectValueCallBack: () => void
    error: boolean
}

const SetCounter = (props: SetCounterType) => {

    const dispatch = useDispatch()

    const classNameCount = `${s.count}`
    const classNameInput = `${s.setCounterInput} ${props.error ? s.error : ''}`

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {

        if (+e.currentTarget.value > props.startValue) {
            dispatch(setMaxValueAC(+e.currentTarget.value))
            dispatch(setVauleSetButtonAC(false))
            dispatch(setErrorAC(false))
        } else {
            dispatch(setMaxValueAC(+e.currentTarget.value))
            props.incorrectValueCallBack()
        }
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if(+e.currentTarget.value < props.maxValue && +e.currentTarget.value >= 0){
            dispatch(setStartValueAC(+e.currentTarget.value))
            dispatch(setVauleSetButtonAC(false))
            dispatch(setErrorAC(false))
        }else{
            dispatch(setStartValueAC(+e.currentTarget.value))
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
import React from 'react';
import s from './Counter.module.css';

export type CounterType = {
    count:number
    onClickInc:()=>void
    onClickRes:()=>void
    startValue: number
    maxValue: number
    vauleSetButton:boolean
    error:boolean
}

const Counter = (props:CounterType) => {

    const classNameCount =  `${s.count} ${props.count === props.maxValue ? s.red : ''}`

    const countOrText = props.error
        ? <div className={s.error}>Incorrect Value!</div>
        : props.vauleSetButton
        ? <div className={classNameCount}>{props.count}</div>
        : <div className={classNameCount}>enter values and press 'set'</div>

    return (
        <div className={s.counter}>
            {countOrText}
            <div className={s.buttons}>
                <button className={s.button} onClick={props.onClickInc} disabled={props.count===props.maxValue || props.error}>inc</button>
                <button className={s.button} onClick={props.onClickRes} disabled={props.count===props.startValue || props.error}>reset</button>
            </div>
        </div>
    );
};

export default Counter;
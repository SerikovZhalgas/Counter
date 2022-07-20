import React from 'react';
import s from './Counter.module.css';

export type CounterType = {
    count: number
    onClickInc:()=>void
    onClickRes:()=>void
    min: number
    max: number
}

const Counter = (props:CounterType) => {
    const classNameCount =  `${s.count} ${props.count === props.max ? s.red : ''}`

    return (
        <div className={s.counter}>
            <div className={classNameCount}>{props.count}</div>
            <div className={s.buttons}>
                <button className={s.button} onClick={props.onClickInc} disabled={props.count===props.max}>inc</button>
                <button className={s.button} onClick={props.onClickRes} disabled={props.count===props.min}>reset</button>
            </div>
        </div>
    );
};

export default Counter;
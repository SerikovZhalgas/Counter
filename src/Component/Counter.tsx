import React, {useState} from 'react';
import s from './Counter.module.css';

const Counter = () => {
    const [count, setCount] = useState(0)

    const onClickInc = () => {
        setCount(count + 1)
    }
    const onClickRes = () => {
        setCount(0)
    }

    const classNameCount = count === 5 ? `${s.count} ${s.red}` : s.count
    const classNameInc = count === 5 ? s.disableButtonInc : s.buttonInc
    const classNameReset = count === 0 ? s.disableButtonRes : s.buttonRes

    return (
        <div className={s.counter}>
            <div className={classNameCount}>{count}</div>
            <div className={s.button}>
                <button className={classNameInc} onClick={onClickInc} disabled={count===5}>inc</button>
                <button className={classNameReset} onClick={onClickRes} disabled={count===0}>reset</button>
            </div>
        </div>
    );
};

export default Counter;
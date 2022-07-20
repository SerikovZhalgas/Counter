import React, {useState} from 'react';
import s from './App.module.css';
import Counter from "./Component/Counter";

function App() {
    const min = 0
    const max = 5;
    const [count, setCount] = useState<number>(min)

    const onClickInc = () => {
        setCount(count + 1)
    }
    const onClickRes = () => {
        setCount(0)
    }

    return (
        <div className={s.app}>
            <Counter
                count={count}
                onClickInc={onClickInc}
                onClickRes={onClickRes}
                min={ min}
                max={ max}
            />
        </div>
    );
}

export default App;

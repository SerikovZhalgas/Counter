import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Counter from "./Component/Counter";
import SetCounter from "./SetCounter/SetCounter";

function App() {

    const [count, setCount] = useState<number>(0)
    const [maxValue, setMaxValue]=useState<number>(5)
    const [startValue, setStartValue]=useState<number>(0)
    const [vauleSetButton, setVauleSetButton] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(()=>{
        const maxValueAsString = localStorage.getItem('maxValue')
        const startValueAsString = localStorage.getItem('startValue')
        if(maxValueAsString && startValueAsString){
            const newMaxValue = JSON.parse(maxValueAsString)
            const newStartValue = JSON.parse(startValueAsString)
            setCount(newStartValue)
            setMaxValue(newMaxValue)
            setStartValue(newStartValue)
        }
    },[])

    const onClickInc = () => {
        setCount(count + 1)
    }
    const onClickRes = () => {
        setCount(startValue)
    }
    const onClickSet = () => {
        setCount(startValue)
        setVauleSetButton(true)
        localStorage.setItem('maxValue',JSON.stringify(maxValue))
        localStorage.setItem('startValue',JSON.stringify(startValue))
    }
    const incorrectValueCallBack = () => {
        setVauleSetButton(true)
        setError(true)
    }

    return (
        <div className={s.app}>
            <SetCounter
                maxValue={maxValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                onClickSet={onClickSet}
                setVauleSetButton={setVauleSetButton}
                vauleSetButton={vauleSetButton}
                incorrectValueCallBack={incorrectValueCallBack}
                error={error}
                setError={setError}
            />
            <Counter
                count={count}
                onClickInc={onClickInc}
                onClickRes={onClickRes}
                maxValue={ maxValue}
                startValue={ startValue}
                vauleSetButton={vauleSetButton}
                error={error}
            />
        </div>
    );
}

export default App;
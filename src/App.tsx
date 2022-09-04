import React, {useEffect} from 'react';
import s from './App.module.css';
import Counter from "./Component/Counter";
import SetCounter from "./SetCounter/SetCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {setCountAC, setErrorAC, setMaxValueAC, setStartValueAC, setVauleSetButtonAC} from "./redux/counterReducer";

function App() {

    const count = useSelector<AppRootStateType, number>(state => state.counter.count)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const vauleSetButton = useSelector<AppRootStateType, boolean>(state => state.counter.vauleSetButton)
    const error = useSelector<AppRootStateType, boolean>(state => state.counter.error)

    const dispatch = useDispatch()

    useEffect(()=>{
        const maxValueAsString = localStorage.getItem('maxValue')
        const startValueAsString = localStorage.getItem('startValue')
        if(maxValueAsString && startValueAsString){
            const newMaxValue = JSON.parse(maxValueAsString)
            const newStartValue = JSON.parse(startValueAsString)
            dispatch(setCountAC(newStartValue))
            dispatch(setMaxValueAC(newMaxValue))
            dispatch(setStartValueAC(newStartValue))
        }
    },[])

    const onClickInc = () => {
        dispatch(setCountAC(count + 1))
    }
    const onClickRes = () => {
        dispatch(setCountAC(startValue))
    }
    const onClickSet = () => {
        dispatch(setCountAC(startValue))
        dispatch(setVauleSetButtonAC(true))
        localStorage.setItem('maxValue',JSON.stringify(maxValue))
        localStorage.setItem('startValue',JSON.stringify(startValue))
    }
    const incorrectValueCallBack = () => {
        dispatch(setVauleSetButtonAC(true))
        dispatch(setErrorAC(true))
    }

    return (
        <div className={s.app}>
            <SetCounter
                maxValue={maxValue}
                startValue={startValue}
                onClickSet={onClickSet}
                vauleSetButton={vauleSetButton}
                incorrectValueCallBack={incorrectValueCallBack}
                error={error}
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
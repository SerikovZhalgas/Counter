import React from 'react';
import s from './App.module.css';
import Counter from "./Component/Counter";

function App() {
    return (
        <div className={s.app}>
            <Counter/>
        </div>
    );
}

export default App;

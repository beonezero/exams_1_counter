import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";

function App() {
    let [count, setCount] = useState<number>(0)

    const changeCount = (counts: number) => {
        setCount(counts)
    }

    return (
        <div className="App">
            <Counter count={count} changeCount={changeCount}/>
        </div>
    );
}

export default App;

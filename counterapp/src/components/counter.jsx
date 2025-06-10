import {useState} from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>Counter App</h1>
            <p>Count: {counter}</p>
            <div style={{display: "flex", gap: "12px"}}>
                <button onClick={() => setCounter((prevValue) => prevValue + 1)}>Increment</button>
                <button onClick={() => setCounter((prevValue) => prevValue - 1)}>Decrement</button>
            </div>
        </div>
    )
}
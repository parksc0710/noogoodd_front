import {useState} from "react";

type UseStateSamplePropType = {
    initValue: number
}

const UseStateSample = ( props : UseStateSamplePropType) => {
    const {initValue} = props;
    const [count, setCount] = useState(initValue);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        </div>
    )
}

export default UseStateSample;


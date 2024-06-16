import {useReducer, useState} from "react";

type reducerActionTypps = "DEC"|"INC"|"DOU"|"RESET";

const reducer = (currnentCount:number, action:reducerActionTypps) => {
    switch (action) {
        case "DEC":
            return currnentCount - 1;
        case "INC":
            return currnentCount + 1;
        case "DOU":
            return currnentCount * 2;
        case "RESET":
            return 0;
    }
}

type UseStateSamplePropType = {
    initValue: number
}

const UseReducerSample = ( props : UseStateSamplePropType) => {
    const {initValue} = props;
    const [count, dispatch] = useReducer(reducer, initValue);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch('INC')}>+</button>
            <button onClick={() => dispatch('DEC')}>-</button>
            <button onClick={() => dispatch('DOU')}>X2</button>
            <button onClick={() => dispatch('RESET')}>0</button>
        </div>
    )
}

export default UseReducerSample;



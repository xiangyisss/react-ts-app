import React, { useState } from "react";
import '../components/count.css';
export const Count = () => {
    const [ value, setValue ] = useState(0)

    const increaseValue = () => {
        setValue(value => value + 1)
    }
    const decreaseValue = () => {
        setValue(value => value - 1)
    }
    const reset = () => {
        setValue(0)
    }
    return (
        <div className="container">
            <p>This is count component</p>
            <p>{value}</p>
            <div className="btn-container">

                <button onClick={ increaseValue }>+</button>
                <button onClick={ decreaseValue }>-</button>
            </div>

            <button onClick={ reset }>Reset</button>
        </div>
    )

}
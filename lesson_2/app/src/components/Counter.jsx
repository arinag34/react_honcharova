import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(10);

    useEffect(() => {
        const savedCount = localStorage.getItem('count');
        const savedMinValue = localStorage.getItem('minValue');
        const savedMaxValue = localStorage.getItem('maxValue');

        if (savedCount) {
            setCount(Number(savedCount));
        }

        if (savedMinValue) {
            setMinValue(Number(savedMinValue));
        }

        if (savedMaxValue) {
            setMaxValue(Number(savedMaxValue));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('count', count.toString());
        localStorage.setItem('minValue', minValue.toString());
        localStorage.setItem('maxValue', maxValue.toString());
    }, [count, minValue, maxValue]);

    const increment = () => {
        if (count < maxValue) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > minValue) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <div>
                <button onClick={decrement} disabled={count <= minValue}>-</button>
                <span>{count}</span>
                <button onClick={increment} disabled={count >= maxValue}>+</button>
            </div>
            <div>
                <label>Мінімальне значення:</label>
                <input
                    type="number"
                    value={minValue}
                    onChange={(e) => setMinValue(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Максимальне значення:</label>
                <input
                    type="number"
                    value={maxValue}
                    onChange={(e) => setMaxValue(Number(e.target.value))}
                />
            </div>
        </div>
    );
};

export default Counter;

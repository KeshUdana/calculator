"use client"; // This line specifies that this component is a client component

import React, { useState } from 'react';

const Calculator: React.FC = () => {
    const [display, setDisplay] = useState<string>('');
    const [result, setResult] = useState<number | string>('');
    const [operation, setOperation] = useState<string>('');

    const appendToDisplay = (value: string) => {
        setDisplay(prev => prev + value);
    };

    const handleSetOperation = (op: string) => {
        setOperation(op);
        appendToDisplay(op);
    };

    const calculate = () => {
        try {
            const numbersAndOps = display.split(/(\+|\-|\*|\/)/);
            let currentResult = parseFloat(numbersAndOps[0]);

            for (let i = 1; i < numbersAndOps.length; i += 2) {
                const nextNumber = parseFloat(numbersAndOps[i + 1]);
                switch (numbersAndOps[i]) {
                    case '+':
                        currentResult += nextNumber;
                        break;
                    case '-':
                        currentResult -= nextNumber;
                        break;
                    case '*':
                        currentResult *= nextNumber;
                        break;
                    case '/':
                        currentResult /= nextNumber;
                        break;
                }
            }

            setResult(currentResult);
            setDisplay(currentResult.toString()); // Allow further operations on the result
        } catch (error) {
            setResult('Error');
            setDisplay('');
        }
    };

    const clearDisplay = () => {
        setDisplay('');
        setResult('');
        setOperation('');
    };

    return (
        <div>
            <h1>Hello User, let's do some math</h1>

            <div className="display">
                <input type="text" value={display} placeholder="0" readOnly />
            </div>

            <div className="numpad">
                {Array.from({ length: 10 }, (_, number) => (
                    <button key={number} onClick={() => appendToDisplay(number.toString())}>
                        {number}
                    </button>
                ))}
            </div>

            <div className="op">
                <p>Choose an operation</p>
                <button onClick={() => handleSetOperation('+')}>+</button>
                <button onClick={() => handleSetOperation('-')}>-</button>
                <button onClick={() => handleSetOperation('/')}>/</button>
                <button onClick={() => handleSetOperation('*')}>*</button>
            </div>

            <br />
            <button onClick={calculate}>=</button>
            <button onClick={clearDisplay}>C</button>
            <h2>Result = <span>{result}</span></h2>
        </div>
    );
};

export default Calculator;

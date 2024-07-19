"use client"; // This line specifies that this component is a client component
import './globals.css';
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
       <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="flex flex-col justify-center items-center w-3/5 p-6 rounded-lg bg-stone-400 z-40">
            <div className="flex justify-center w-full mb-8">
              <div className="w-1/2 border-4 border-orange-500 rounded-lg">
                <input
                  className="text-4xl w-full p-2"
                  type="text"
                  value={display}
                  placeholder="0"
                  readOnly
                />
              </div>
            </div>
            <div className="numpad grid grid-cols-3 gap-2 w-40 mx-auto">
                {Array.from({ length: 10 }, (_, number) => (
                    <button className="bg-stone-700 hover:bg-stone-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    key={number} onClick={() => appendToDisplay(number.toString())}>
                        {number}
                        
                    </button>
                ))}
                <button className='bg-orange-500 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => handleSetOperation('+')}>+</button>
                <button className='bg-orange-500 hover:bg-orange-800  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => handleSetOperation('-')}>-</button>
                <button className='bg-orange-500 hover:bg-orange-800  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => handleSetOperation('/')}>/</button>
                <button className='bg-orange-500 hover:bg-orange-800  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => handleSetOperation('*')}>*</button>
                <button className='bg-orange-500 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={calculate}>=</button>
                <button className='bg-orange-500 hover:bg-orange-800  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={clearDisplay}>C</button>
            </div>
            <h2 className='text-4xl text-semibold text-sky-900'>Answer : <span>{result} </span></h2>
            
        </div>
        </div>
    );
};

export default Calculator;

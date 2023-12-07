import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [error, setError] = useState('');

  const handleClick = (value) => {
    setError('');

    if (value === '=') {
      try {
        const result = eval(display);
        if (result === Infinity || isNaN(result)) {
          throw new Error('Sıfıra bölme hatası!');
        }
        setDisplay(result.toString());
      } catch (err) {
        setError('Hata');
      }
    } else if (value === 'C') {
      setDisplay('');
      setError('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{error ? error : display}</div>
      <div className="keypad">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>÷</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>×</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
    </div>
  );
};

export default Calculator;

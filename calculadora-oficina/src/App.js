import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const add = val => setInput(input + val);
  const clear = () => setInput('');
  const del = () => setInput(input.slice(0, -1));

  const calculate = () => {
    try {
      let expr = input
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/√/g, 'Math.sqrt')
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/\^/g, '**')
        .replace(/%/g, '/100');
      const result = Function(`return ${expr}`)();
      setInput(String(result));
    } catch {
      setInput('Erro');
    }
  };

  return (
    <div className="calculator">
      {/* Visor */}
      <input type="text" className="display" value={input} readOnly />

      {/* Linha com Clear e Delete */}
      <div className="top-buttons">
        <button className="clear" onClick={clear}>C</button>
        <button className="delete" onClick={del}>←</button>
      </div>

      {/* Botões principais */}
      <div className="buttons">
        <button onClick={() => add('(')}>(</button>
        <button onClick={() => add(')')}>)</button>
        <button onClick={() => add('%')}>%</button>
        <button onClick={() => add('÷')}>÷</button>

        <button onClick={() => add('7')}>7</button>
        <button onClick={() => add('8')}>8</button>
        <button onClick={() => add('9')}>9</button>
        <button onClick={() => add('×')}>×</button>

        <button onClick={() => add('4')}>4</button>
        <button onClick={() => add('5')}>5</button>
        <button onClick={() => add('6')}>6</button>
        <button onClick={() => add('-')}>-</button>

        <button onClick={() => add('1')}>1</button>
        <button onClick={() => add('2')}>2</button>
        <button onClick={() => add('3')}>3</button>
        <button onClick={() => add('+')}>+</button>

        <button onClick={() => add('0')}>0</button>
        <button onClick={() => add('.')}>.</button>
        <button onClick={() => add('^')}>^</button>
        <button onClick={() => add('√(')}>√</button>

        <button className="equal" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;

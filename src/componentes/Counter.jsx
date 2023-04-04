import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count +1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button className="increment" onClick={decrementCount}>Decrementar</button>
      <button className="decrement" onClick={incrementCount}>Incrementar</button>
    </div>
  );
}

export default Counter;
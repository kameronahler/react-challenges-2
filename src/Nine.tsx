import { useState } from 'react';

const Nine = () => {
  const [count, setCount] = useState(0);

  const handleClick = (val: number) => {
    setCount(count + val);
  };

  return (
    <section aria-aria-labelledby="nine">
      <h2 id="nine">9: counter app</h2>
      <p>Counter: {count}</p>
      <button onClick={() => handleClick(-1)}>-1</button>
      <button onClick={() => handleClick(1)}>+1</button>
    </section>
  );
};

export default Nine;

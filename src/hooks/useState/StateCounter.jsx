import { useState } from 'react';

export default function StateCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useState Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

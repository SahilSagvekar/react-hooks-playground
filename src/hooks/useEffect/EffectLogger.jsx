import { useEffect, useState } from 'react';

export default function EffectLogger() {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('Input changed:', value);
  }, [value]);

  return (
    <div>
      <h2>useEffect Example</h2>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type here..." />
    </div>
  );
}

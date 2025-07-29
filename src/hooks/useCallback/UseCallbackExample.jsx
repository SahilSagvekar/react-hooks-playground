import React, { useCallback, useState } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return (
    <div className="mt-4">
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click Child Button
      </button>
    </div>
  );
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [childClicks, setChildClicks] = useState(0);

  const handleChildClick = useCallback(() => {
    setChildClicks((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">useCallback Example</h2>
      <p>Parent Count: {count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded mr-4"
      >
        Increment Parent Count
      </button>

      <p className="mt-2">Child Button Clicked: {childClicks} times</p>
      <Child onClick={handleChildClick} />
    </div>
  );
};

export default UseCallbackExample;

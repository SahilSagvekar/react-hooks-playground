import React from "react";
import useLocalStorage from "./useLocalStorage";

const UseLocalStorageExample = () => {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-semibold mb-4">Custom Hook: useLocalStorage</h2>
      <input
        className="border px-2 py-1"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="mt-2">Saved Name: <strong>{name}</strong></p>
    </div>
  );
};

export default UseLocalStorageExample;

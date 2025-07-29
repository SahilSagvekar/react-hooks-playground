import React, { createContext, useContext, useState } from "react";

// Create Context
const ThemeContext = createContext();

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Component that uses context
const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="p-4 border rounded">
      <p className="mb-2">Current Theme: <strong>{theme}</strong></p>
      <button
        onClick={toggleTheme}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
};

// Main Component
const UseContextExample = () => {
  return (
    <ThemeProvider>
      <h2 className="text-xl font-semibold mb-4">useContext Example</h2>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default UseContextExample;

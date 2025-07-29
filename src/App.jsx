// import CounterExample from './hooks/useState/CounterExample';
// import FetchExample from './hooks/useEffect/FetchExample';
// import ThemeContextExample from './hooks/useContext/ThemeContextExample';
// import { ThemeProvider } from './hooks/useContext/ThemeContext';
// import TodoReducerExample from './hooks/useReducer/TodoReducerExample';
// import FocusInputExample from './hooks/useRef/FocusInputExample';
// import ExpensiveCalculation from './hooks/useMemo/ExpensiveCalculation';

// function App() {
//   return (
//     <ThemeProvider>
//       <h1 style={{ textAlign: 'center' }}>🚀 React Hooks Mastery</h1>
//       <CounterExample />
//       <hr />
//       <FetchExample />
//       <hr />
//       <ThemeContextExample />
//       <TodoReducerExample />
//       <FocusInputExample />
//       <ExpensiveCalculation />
//     </ThemeProvider>
//   );
// }

// export default App;
import { useState } from 'react';
import HookSelector from './components/HookSelector';

import StateCounter from './hooks/useState/StateCounter';
import EffectLogger from './hooks/useEffect/EffectLogger';
import InputFocusRef from './hooks/useRef/InputFocusRef';
import ExpensiveCalculation from './hooks/useMemo/ExpensiveCalculation';
import UseReducerExample from './hooks/useReducer/useReducerExample';
import UseCallbackExample from './hooks/useCallback/UseCallbackExample';  
import UseContextExample from './hooks/useContext/UseContextExample';
import UseLocalStorageExample from './hooks/customHooks/UseLocalStorageExample';
// Add more imports here as we go

const HOOK_COMPONENTS = {
  useState: <StateCounter />,
  useEffect: <EffectLogger />,
  useRef: <InputFocusRef />,
  useMemo: <ExpensiveCalculation />,
  useReducer: <UseReducerExample />,
  UseCallbackExample: <UseCallbackExample />,
  useContext: <UseContextExample />,
  CustomHookExample: <UseLocalStorageExample />,
  // More to come...
};

export default function App() {
  const [selectedHook, setSelectedHook] = useState('useState');

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <HookSelector selected={selectedHook} onSelect={setSelectedHook} />
      <main style={{ padding: '2rem', flex: 1 }}>
        {HOOK_COMPONENTS[selectedHook]}
      </main>
    </div>
  );
}

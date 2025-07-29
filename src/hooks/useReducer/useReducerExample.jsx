import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">useReducer Example</h2>
      <p className="text-lg">Count: {state.count}</p>
      <div className="mt-2 flex gap-2">
        <button onClick={() => dispatch({ type: "increment" })} className="btn">+</button>
        <button onClick={() => dispatch({ type: "decrement" })} className="btn">-</button>
        <button onClick={() => dispatch({ type: "reset" })} className="btn">Reset</button>
      </div>
    </div>
  );
}

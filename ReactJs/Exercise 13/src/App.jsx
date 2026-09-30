import React, { useReducer } from 'react';8
const InitialState = {
  counterA: 0,
  counterB: 0,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_A':
      return { ...state, counterA: state.counterA + 1 };
    case 'DECREMENTA':
      return {
        ...state,
        counterA: state.counterA > 0 ? state.counterA - 1 : 0,
      };
    case 'INCREMENTb':
      return { ...state, counterB: state.counterB + 1 };
    case 'DECREMENTb':
      return {
        ...state,
        counterB: state.counterB > 0 ? state.counterB - 1 : 0,
      };
    case 'RESET':
      return InitialState;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  return (
    <div>
      <h2>Double Counter</h2>

      <div>
        <h3>Counter A: {state.counterA}</h3>
        <button
          onClick={() => dispatch({ type: 'DECREMENTA' })}
          disabled={state.counterA === 0}
        >
          - A
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENT_A' })}>
          + A
        </button>
      </div>

      <div>
        <h3>Counter B: {state.counterB}</h3>
        <button
          onClick={() => dispatch({ type: 'DECREMENTb' })}
          disabled={state.counterB === 0}
        >
          - B
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENTb' })}>
          + B
        </button>
      </div>

      {/* Reset both counters */}
      <div>
        <button onClick={() => dispatch({ type: 'RESET' })}>
          Reset Both
        </button>
      </div>
    </div>
  );
}

export default App;
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
    //또는 throw new Error("Unhandled action");
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0); //useReducer(리듀서, 초깃값)
  // const [number, setNumber] = useState(0);
  // const numberState = useState(0);
  //   const number = numberState[0];
  //   const setNumber = numberState[1];
  const onIncrease = () => {
    dispatch({
      type: "INCREMENT",
    });
    console.log("+1");
  };
  const onDecrease = () => {
    dispatch({
      type: "DECREMENT",
    });
    console.log("-1");
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;

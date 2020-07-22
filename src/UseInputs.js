import { useReducer, useCallback } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      const { name, value } = action;
      console.log(state, "응?");
      return {
        ...state,
        [name]: value,
      };
    case "RESET":
      return action.initialForm;
    default:
      throw new Error("Unhandled Exception");
  }
}
//custom hook
function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE",
      name,
      value,
    });
    console.log(name, value);
  }, []);
  const reset = useCallback(() =>
    dispatch({
      type: "RESET",
      initialForm,
    })
  );
  return [state, onChange, reset];
}

export default useInputs;

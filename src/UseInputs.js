import { useState, useReducer, useCallback } from "react";

function reducer(state, action) {
  //CHANGE
  //RESET
}
//custom hook
function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
}

export default useInputs;

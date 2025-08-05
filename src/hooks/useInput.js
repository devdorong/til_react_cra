import { useState } from "react";

const useInput = (init = "") => {
  const [value, setValue] = useState(init);
  const onChange = e => setValue(e.target.value);
  const reset = () => setValue(init);
  return { value, onChange, reset };
};

export default useInput;

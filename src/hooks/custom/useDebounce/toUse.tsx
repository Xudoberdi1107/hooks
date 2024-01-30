import { ChangeEvent, useState } from "react";
import useDebounce from ".";

export function tuUse() {
  const [input, setInput] = useState("");
  let debouncedValue = useDebounce(input, 500);
  const fun = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={fun} value={input} />
      <p>{debouncedValue}</p>
    </>
  );
}

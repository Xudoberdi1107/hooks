import { useEffect, useState } from "react";

function useDebounce(velue: any, delay: number) {
  const [debounceValue, setDebounceValue] = useState(velue);
  useEffect(() => {
    let hendele = setTimeout(() => {
      setDebounceValue(velue);
    }, delay);

    return () => {
      clearTimeout(hendele);
    };
  }, [velue, delay]);

  return debounceValue;
}
export default useDebounce;

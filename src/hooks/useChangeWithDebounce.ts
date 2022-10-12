import {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { debounce } from "@material-ui/core";
import { TOnChange } from "../utils/types";

export const useChangeWithDebounce = (
  originValue: string,
  originOnChange: TOnChange,
  debounceMsTime: number
): [string, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<string>(originValue);
  const valueRef = useRef(value);

  useEffect(() => {
    if (originValue !== valueRef.current) {
      setValue(originValue);
    }
  }, [originValue]);

  const onChangeWithDebounce = useMemo(
    () =>
      debounce(
        (valueParameter, callback) => callback(valueParameter),
        debounceMsTime
      ),
    [debounceMsTime]
  );

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newTextValue = e?.target?.value;
    setValue(newTextValue);
    valueRef.current = newTextValue;

    onChangeWithDebounce(e, originOnChange);
  }, [originOnChange, valueRef]);

  return [value, onChange];
};

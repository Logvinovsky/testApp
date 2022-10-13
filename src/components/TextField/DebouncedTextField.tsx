import React, { FC } from "react";
import { TOnChange } from "../../utils/types";
import { useChangeWithDebounce } from "../../hooks/useChangeWithDebounce";
import { TextField } from "./TextField";

interface IContainerTextFieldProps {
  debounceMsTime?: number;
  value: string;
  onChange: TOnChange;
  placeholder: string;
  id: string;
}

export const DebouncedTextField: FC<IContainerTextFieldProps> = ({
  debounceMsTime = 250,
  value: valueFromParent,
  onChange: onChangeFromParent,
  placeholder,
  id,
}) => {
  const [textValue, onChange] = useChangeWithDebounce(
    valueFromParent,
    onChangeFromParent,
    debounceMsTime
  );

  return (
    <TextField
      id={id}
      placeholder={placeholder}
      value={textValue}
      onChange={onChange}
    />
  );
};

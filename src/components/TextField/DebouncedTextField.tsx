import React, { FC } from "react";
import TextField from "./TextField";
import { TOnChange } from "../../utils/types";
import { useChangeWithDebounce } from "../../hooks/useChangeWithDebounce";

interface IContainerTextFieldProps {
  debounceMsTime?: number;
  value: string;
  onChange: TOnChange;
  placeholder: string;
  id: string;
}

const DebouncedTextField: FC<IContainerTextFieldProps> = ({
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

export default DebouncedTextField;

import React, { FC } from "react";
import TextField from "./TextField";
import useChangeWithDebounce from "../../hooks/useChangeWithDebounce";
import { TOnChange } from "../../utils/types";

interface IContainerTextFieldProps {
  debounceMsTime?: number;
  value: string;
  onChange: TOnChange;
  placeholder: string;
  id: string;
}

const ContainerTextField: FC<IContainerTextFieldProps> = ({
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

export default ContainerTextField;

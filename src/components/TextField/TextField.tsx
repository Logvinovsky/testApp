import { FC } from "react";
import styled from "styled-components";
import MaterialUiTextField, {TextFieldProps} from "@material-ui/core/TextField";
import {TOnChange} from "../../utils/types";

interface ITextFieldProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: TOnChange;
}

const StyledTextField = styled(MaterialUiTextField)`
  width: 300px;
  .MuiOutlinedInput-root {
    & input::placeholder {
      color: grey;
      opacity: 1;
    }

    &.Mui-disabled input::placeholder {
      opacity: 0.5;
    }
  }
`;

const TextField: FC<TextFieldProps> = ({
  id,
  placeholder,
  value,
  ...props
}) => {
  return (
    <StyledTextField
      {...props}
      value={value}
      id={id}
      placeholder={placeholder}
      variant="outlined"
    />
  );
};

export default TextField;

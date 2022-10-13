import { FC } from "react";
import styled from "styled-components";
import MaterialUiTextField, {
  TextFieldProps,
} from "@material-ui/core/TextField";

const StyledTextField = styled(MaterialUiTextField)`
  width: 100%;

  .MuiInputBase-input {
    padding: 15px;
  }

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

export const TextField: FC<TextFieldProps> = ({
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

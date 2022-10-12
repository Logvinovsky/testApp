import React, { FC } from "react";
import { Dialog } from "@material-ui/core";
import styled from "styled-components";

interface IProductModalProps {
  isOpen: boolean;
  description: string;
  onClose: () => void;
}

const StyledDialog = styled(Dialog)`
  .MuiDialog-container {
    position: relative;

    .MuiPaper-root {
      position: absolute;
      margin: 0;

      width: 500px;
      height: 300px;
    }

    .MuiDialogContent-root {
    }
`;

const ProductModal: FC<IProductModalProps> = ({
  isOpen,
  description,
  onClose,
}) => {
  return (
    <StyledDialog open={isOpen} onClose={onClose}>
      {description}
    </StyledDialog>
  );
};

export default ProductModal;

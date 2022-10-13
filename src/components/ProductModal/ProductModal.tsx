import React, { FC } from "react";
import {Dialog, Button, darken} from "@material-ui/core";
import styled from "styled-components";
import { IProductModalData } from "../../pages/productPage/ProductPage";

interface IProductModalProps {
  isOpen: boolean;
  data: IProductModalData;
  onClose: () => void;
}

const StyledDialog = styled(Dialog)`
  .MuiDialog-container {
    position: relative;

    .MuiPaper-root {
      position: absolute;
      margin: 0;
      padding: 15px;

      width: 500px;
    }

    .MuiDialogContent-root {
    }

    .MuiButtonBase-root {
      margin-top: 20px;
      background: lightblue;

      &:hover {
        transition: background-color 0.5s ease-in;
        background: deepskyblue;
      }
    }
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
`;

const Description = styled.div`
  margin-top: 10px;
`;

export const ProductModal: FC<IProductModalProps> = ({ isOpen, data, onClose }) => {
  const { title, description } = data;

  return (
    <StyledDialog open={isOpen} onClose={onClose}>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <Button onClick={onClose}>Close</Button>
    </StyledDialog>
  );
};


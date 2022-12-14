import React, {Dispatch, FC, MouseEvent, SetStateAction} from "react";
import styled from "styled-components";
import {IProductModalData} from "../../pages/productPage/ProductPage";

interface IProductProps {
  title: string;
  sku: string;
  openModal: () => void;
  setProductData: Dispatch<SetStateAction<IProductModalData>>;
  description: string;
}

const ProductWrapper = styled.div`
  padding: 15px;
  border: 1px solid lightblue;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  box-shadow: 5px 10px 5px rgba(0, 192, 255, 0.15);
`;

const Title = styled.div`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const SkuCode = styled.div``;

export const Product: FC<IProductProps> = ({
  title,
  sku,
  openModal,
  setProductData,
  description,
}) => {
  const handleTitleClick = (e: MouseEvent<HTMLDivElement>) => {
    openModal();
    setProductData({title, description});
  };

  return (
      <ProductWrapper>
        <Title onClick={handleTitleClick}>{title}</Title>
        <SkuCode>{sku}</SkuCode>
      </ProductWrapper>
  );
};

import React, {Dispatch, FC, MouseEvent, SetStateAction} from "react";
import styled from "styled-components";

interface IProductProps {
  id: number;
  name: string;
  sku: string;
  openModal: () => void;
  setProductDescription: Dispatch<SetStateAction<string>>;
  description: string;
}

const ProductWrapper = styled.div`
  width: 100%;
  padding: 15px;
  border: 1px solid lightblue;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const SkuCode = styled.div``;

const Product: FC<IProductProps> = ({
  id,
  name,
  sku,
  openModal,
  setProductDescription,
  description,
}) => {
  const handleTitleClick = (e: MouseEvent<HTMLDivElement>) => {
    openModal();
    setProductDescription(description);
  };

  return (
    <>
      <ProductWrapper>
        <Title onClick={handleTitleClick}>{name}</Title>
        <SkuCode>{sku}</SkuCode>
      </ProductWrapper>
    </>
  );
};

export default Product;

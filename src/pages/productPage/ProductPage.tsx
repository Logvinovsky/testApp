import React, { ChangeEvent, useState } from "react";
import products from "../../mocks/products.json";
import Product from "../../components/Product/Product";
import { IProduct } from "../../components/Product/product.types";
import styled from "styled-components";
import ContainerTextField from "../../components/TextField/ContainerTextField";
import ProductModal from "../../components/ProductModal/ProductModal";

const Wrapper = styled.div`
  margin: auto;
  width: 60%;
`;

const ProductsWrapper = styled.div`
  margin-top: 20px;
`;

const ProductPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [productDescription, setProductDescription] = useState<string>("");

  const filteredProducts = products.filter(
    (product: IProduct) =>
      product.name.toLowerCase().includes(searchValue.trim().toLowerCase()) ||
      product.sku.toLowerCase().includes(searchValue.trim().toLowerCase())
  );

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <Wrapper>
      <ContainerTextField
        value={searchValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        placeholder={"Search..."}
        id={"searchbar"}
      />
      <ProductsWrapper>
        {filteredProducts.map((product: IProduct) => (
          <Product
            id={product.id}
            name={product.name}
            description={product.description}
            sku={product.sku}
            key={product.id}
            openModal={openModal}
            setProductDescription={setProductDescription}
          />
        ))}
      </ProductsWrapper>

      <ProductModal
        isOpen={modalIsOpen}
        description={productDescription}
        onClose={closeModal}
      />
    </Wrapper>
  );
};

export default ProductPage;

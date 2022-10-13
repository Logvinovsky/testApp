import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Product } from "../../components/Product/Product";
import { IProduct } from "../../components/Product/product.types";
import styled from "styled-components";
import { DebouncedTextField } from "../../components/TextField/DebouncedTextField";
import { ProductModal } from "../../components/ProductModal/ProductModal";
import { getProducts } from "../../utils/helpers";
import { Loader } from "../../components/Loader/Loader";

export interface IProductModalData {
  title?: string;
  description?: string;
}

const Wrapper = styled.div`
  margin: auto;
  width: 60%;
`;

const ProductsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ProductPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [productData, setProductData] = useState<IProductModalData>({});
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts().then((products: IProduct[]) => {
      setIsLoading(false);
      setProducts(products);
    });
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product: IProduct) =>
        product.title
          .toLowerCase()
          .includes(searchValue.trim().toLowerCase()) ||
        product.sku.toLowerCase().includes(searchValue.trim().toLowerCase())
    );
  }, [products, searchValue]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <Wrapper>
      <DebouncedTextField
        value={searchValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        placeholder={"Search..."}
        id={"searchbar"}
      />

      <ProductsWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          filteredProducts.map((product: IProduct) => (
            <Product
              title={product.title}
              description={product.description}
              sku={product.sku}
              key={product.id}
              openModal={openModal}
              setProductData={setProductData}
            />
          ))
        )}
      </ProductsWrapper>

      <ProductModal
        isOpen={modalIsOpen}
        data={productData}
        onClose={closeModal}
      />
    </Wrapper>
  );
};

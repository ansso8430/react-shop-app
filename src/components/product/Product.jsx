"use client";

import React, { useEffect } from "react";
import useFetchCollection from "src/hooks/useFetchCollection";
import styles from "./Product.module.scss";
import { useDispatch, useSelector } from "react-redux";
// prettier-ignore
import { STORE_PRODUCTS, selectProducts, GET_PRICE_RANGE } from "src/redux/slice/productSlice";
import Loader from "../loader/Loader";
import ProductList from "./productList/ProductList";
import ProductFilter from "./productFilter/ProductFilter";

const Product = () => {
  const { data, isLoading } = useFetchCollection("products");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );

    dispatch(
      GET_PRICE_RANGE({
        products: data,
      })
    );
  }, [data, dispatch]);

  const products = useSelector(selectProducts);

  return (
    <section className={styles.product}>
      <aside className={styles.filter}>
        {isLoading ? null : <ProductFilter />}
      </aside>
      <div className={styles.content}>
        {isLoading ? <Loader basic /> : <ProductList />}
      </div>
    </section>
  );
};

export default Product;

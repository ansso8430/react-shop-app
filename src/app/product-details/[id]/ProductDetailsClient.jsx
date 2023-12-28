"use client";

import { useParams } from "next/navigation";
import React from "react";
import useFetchDocument from "../../../hooks/useFetchDocument";
import Loader from "src/components/loader/Loader";
import styles from "./ProductDetails.module.scss";

const ProductDetailsClient = () => {
  const { id } = useParams();

  const { document: product } = useFetchDocument("products");

  const addToCart = () => {};

  const today = new Data();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));

  const tomorrowDate = tomorrow.getDate();
  const tomorrowMonth = tomorrow.getMonth();

  return (
    <section className={styles.product}>
      {product === null ? <Loader /> : <></>}
    </section>
  );
};

export default ProductDetailsClient;

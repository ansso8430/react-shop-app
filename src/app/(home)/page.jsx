import Image from "next/image";
import Slider from "src/components/slider/Slider";
import Product from "src/components/product/Product";
// import styles from "./Slider.module.scss";

export default function Home() {
  return (
    <>
      <Slider />
      <Product />
    </>
  );
}

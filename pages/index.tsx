import type { GetServerSideProps } from "next";
import Head from "next/head";
import Featured from "../component/Featured";
import ProductList from "../component/ProductList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { ProductLists } from "../typings";
import { useState } from "react";

const Home = ({
  pizzaList,
  admin,
}: {
  pizzaList: ProductLists[];
  admin: boolean;
}) => {
  const [close, setClose] = useState<boolean>(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <span>Hello</span>}
      <ProductList pizzaList={pizzaList} />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get("http://localhost:3000/api/product");

  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};

export default Home;

import type {
  GetServerSideProps,
 
} from "next";
import Head from "next/head";
import Featured from "../component/Featured";
import ProductList from "../component/ProductList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { ProductLists } from "../typings";


const Home = ({pizzaList}:{
  pizzaList:ProductLists[]
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList pizzaList={pizzaList} />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:3000/api/product");

  return {
    props: {
     pizzaList:res.data
    },
  };
};

export default Home;

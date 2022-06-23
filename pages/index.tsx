import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Featured from "../component/Featured";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
    </div>
  );
};

export default Home;
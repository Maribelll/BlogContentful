import Link from "next/link";
import React from "react";
import Layout from "../Components/Layout";
import styles from "../styles/error.module.scss";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>404</h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">Go back home</Link>
      </div>
    </Layout>
  );
}

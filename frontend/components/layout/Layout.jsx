import Header from "components/header/Header";
import SideBar from "components/sidebar/SideBar";
import React from "react";
import styles from "./layout.module.css";

function Layout(props) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <aside className={styles.sidebar}>
        <SideBar />
      </aside>
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;

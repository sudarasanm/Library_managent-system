// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import Navbar from "../../components/homepage/navbar";
import { Fragment } from "react";
import IconList from "components/iconlist/IconList";
import { Library } from "../../assests/images/library.jpg";
import Login from "components/Login/Login";

export default function Home() {
  return (
    <Fragment>
    <Login/>
    </Fragment>
  );
}

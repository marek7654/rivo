import { Outlet } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import classes from "./Root.module.css";

const RootLayout = () => {
  return <>
    <Header/>
    <main className={classes.main} style={{minHeight: `${window.innerHeight - 102}px`}}>
      <Outlet/>
    </main>
    <Footer/>
  </>
}

export default RootLayout;

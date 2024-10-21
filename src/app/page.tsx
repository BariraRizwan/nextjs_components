import Image from "next/image";
import styles from "./page.module.css";
import Header from "../app/header/page";
import Herosection from "../app/hero/page";
import Footer from "../app/footer/page";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Herosection></Herosection>
      <Footer></Footer>
    </div>
     );
}

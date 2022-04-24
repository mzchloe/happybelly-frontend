import logo from './logo.svg';
import styles from './App.module.css';
import {Outlet} from "react-router-dom";
import { Navbar, Footer, Copyright } from "./components";

function App() {
  return (
    <div className={styles.textColor}>
    <Navbar />
    <Outlet />
    <Footer />
    <Copyright />
    </div>
  );
}

export default App;

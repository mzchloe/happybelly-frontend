import logo from './logo.svg';
import styles from './App.module.css';
import {Outlet} from "react-router-dom";
import { Navbar, Footer, Copyright } from "./components";
import { useContext } from 'react';
import { AuthContext } from './context';

function App() {

  const { user } = useContext(AuthContext)

  return (
    <div className={styles.textColor}>

  { user &&  <Navbar />}
    <Outlet />
  { user &&  <Footer />}
    <Copyright />
    </div>
  );
}

export default App;

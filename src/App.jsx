import React from 'react'
import styles from "./App.module.css";
import { Navbar } from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import  About  from './Components/About/About';
import Experience from './Components/Experience/Experience'
import {Projects} from './Components/Projects/Projects';
import {Contact} from './Components/Contact/Contact';
export default function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

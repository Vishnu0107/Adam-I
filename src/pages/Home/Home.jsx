import React from 'react';
import styles from './Home.module.css';
import NavBar from '../../components/Navbar/Navbar';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div className={styles.home_main}>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}

export default Home;

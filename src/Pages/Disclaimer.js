import React from "react";
import Helmet from "react-helmet";
// ! Components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Disclaimer = () => {
    return (
    <>
    <Helmet title='VEOveneht • Disclaimer'/>
    <Navigation />
    <main>
    <h1>Disclaimer</h1>
    </main>
    <Footer />
    </>)
}

export default Disclaimer;
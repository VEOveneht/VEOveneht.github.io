import React from "react";
import Helmet from "react-helmet";
// ! Components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Store = () => {
    return (
    <>
    <Helmet title='VEOveneht • RAYISAN Store'/>
    <Navigation />
    <main>
    <h1>RAYISAN Store</h1>
    </main>
    <Footer />
    </>)
}

export default Store;
import React from "react";
import Helmet from "react-helmet";

import Navigation from '../components/Navigation';
import Main from '../components/Main';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
        <Helmet title='VEOveneht'/>
        <Navigation />
        <Main />
        <Footer />
        </>
    )
}

export default Home
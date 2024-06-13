import React from "react";
import Helmet from "react-helmet";

// ! Components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Privacy_Policy = () => {
    return (
    <>
    <Helmet title='VEOveneht • Privacy Policy'/>
    <Navigation />
    <main>
    <h1>Privacy Policy</h1>
    </main>
    <Footer />
    </>)
}

export default Privacy_Policy;
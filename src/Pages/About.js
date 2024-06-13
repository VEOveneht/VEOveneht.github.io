import React from "react";
import Helmet from "react-helmet";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {

    return (
    <>
    <Helmet title='VEOveneht • About'/>
    <Navigation />
    <main>
    <h1>About</h1>
    </main>
    <Footer />
    </>)
}

export default About;
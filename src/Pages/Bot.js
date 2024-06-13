import React from "react";
import Helmet from "react-helmet";

// ! Components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const Bot = () => {
    return (
        <>
        <Helmet title='VEOveneht • Bot'/>
        <Navigation />
        <main>
            <div className="container">
                <div className="wrap">
                    <p>VEO BOT</p>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Bot;
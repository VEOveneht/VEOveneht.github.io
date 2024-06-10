import React from "react";

// ! Components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const Bot = () => {
    return (
        <>
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
import React from "react";

// ! Layout
import Navigation from "../Layout/Navigation";
import Footer from "../Layout/Footer";


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
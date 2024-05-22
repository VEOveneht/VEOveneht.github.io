import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
    return (
    <>
    <Navigation />
    <main className="contact-container">
        <h3>Contact US</h3><br/>
            <div id="contact">
                <form>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" placeholder="Nama"/>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" placeholder="Email"/>
                    <label htmlFor="description">Description: </label>
                    <textarea id="description" placeholder="Deskripsi"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    <Footer />
    </>)
}

export default Contact;
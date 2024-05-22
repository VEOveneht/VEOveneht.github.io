import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// ! CSS & IMG
import '../assets/css/contact.css';
import github from '../assets/img/svg/github.svg';
import instagram from'../assets/img/svg/instagram.svg';
import twitter from'../assets/img/svg/twitter-x.svg';

const Contact = () => {
    return (
    <>
    <Navigation />
    <main className="contact-container">
        <h1>Contact US</h1><br/>
        <div id="contact">
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" placeholder="Nama" name="nama"/>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" placeholder="Email" name="email"/>
                <label htmlFor="description">Description: </label>
                <textarea id="description" placeholder="Deskripsi" name="deskripsi"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div id="sosmed">
            <h1>Social</h1>
            <div>
                <button ><img alt="Github" src={github}/><a href="https://github.com/VEOveneht">Github</a></button>
                <button ><img alt="Instagram" src={instagram}/><a href="https://www.instagram.com/loo3837955ol/">Instagram</a></button>
                <button ><img alt="Twitter" src={twitter}/><a href="https://x.com/FOBDBM">Twitter</a></button>
            </div>
        </div>
    </main>
    <Footer />
    </>)
}

export default Contact;
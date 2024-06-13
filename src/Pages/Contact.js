import React from "react";
import { Helmet } from "react-helmet";
// ! Components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// ! CSS & IMG
import '../assets/css/contact.css';
import github from '../assets/img/svg/github.svg';
import instagram from'../assets/img/svg/instagram.svg';
import twitter from'../assets/img/svg/twitter-x.svg';

const Contact = () => {
    return (
    <>
    <Helmet title='VEOveneht • Contact'/>
    <Navigation />
    <main className="contact-container">
        <br/>
        <h1>Contact Us</h1>
        <br/>
        <div id="contact">
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" placeholder="Nama" name="nama"/>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" placeholder="Email" name="email"/>
                <label htmlFor="description">Description: </label>
                <textarea id="description" placeholder="Deskripsi" name="deskripsi"></textarea>
                <button className="contact-btn" type="submit">Submit</button>
            </form>
        </div>
        <div id="sosmed">
            <br/>
            <h1>Social</h1>
            <br/>
            <div>
                    <a href="https://github.com/VEOveneht" className="sosmed-btn">
                    <img alt="Github" src={github}/>
                    Github
                    </a>
                    <a href="https://www.instagram.com/loo3837955ol/" className="sosmed-btn">
                    <img alt="Instagram" src={instagram}/>
                    Instagram
                    </a>
                    <a href="https://x.com/FOBDBM" className="sosmed-btn">
                    <img alt="Twitter" src={twitter}/>
                    Twitter
                    </a>
            </div>
            <br/>
        </div>
    </main>
    <Footer />
    </>)
}

export default Contact;
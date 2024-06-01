import React from "react";
import { Link } from 'react-router-dom';
import Navigation from "../Layout/Navigation";
import Footer from "../Layout/Footer";
import torambg from '../assets/img/toram background.jpeg'
import veotoram from '../assets/img/veo-toram.jpg'

const Blog = () => {
    return (
    <>
    <Navigation />
    <main>
    <div id='blog'></div>
            <div className='container'>
                <div className='wrap'>
                    <h1>BLOG</h1>
                    <div className='carousel'>
                        <button className='carousel-btn prev'>&lt;</button>
                        <button className='carousel-btn next'>&gt;</button>
                        <div className='card'>
                            <img alt='veo' src={veotoram} style={{width: '30vh'}}></img>
                            <div className='bg-text'>
                                <Link to='/leveling-toram-online'>Leveling Toram Online Level 1-255 (2024)</Link>
                            </div>
                        </div>
                        <div className='card'>
                            <img alt='Toram Online BG' src={torambg} style={{width: '30vh'}}></img>
                            <div className='bg-text'>
                                <Link to='/'> Toram Online GUIDE (ID)</Link>
                            </div>
                        </div>
                        <div className='card'>
                            <img alt='Toram Online BG' src={torambg} style={{width: '30vh'}}></img>
                            <div className='bg-text'>
                                <Link to='/bahan-mq-toram'>Bahan MQ Toram (2023 Update)</Link>
                            </div>
                        </div>
                    </div>
                    <Link to='/blog'>Show more...</Link>
                </div>
            </div>
    </main>
    <Footer />
    </>)
}

export default Blog;
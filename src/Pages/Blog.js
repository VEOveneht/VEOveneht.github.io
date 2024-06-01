import React from "react";
import { Link } from 'react-router-dom';
import Navigation from "../Layout/Navigation";
import Footer from "../Layout/Footer";
import torambg from '../assets/img/toram background.jpeg'
import veotoram from '../assets/img/veo-toram.jpg'

import '../assets/css/blog.css';


const Blog = () => {
    return (
    <>
    <Navigation />
    <main>
        <div className='container'>
            <div className='wrap'>
                    <h1>BLOG</h1>
                <div id="blog">
                    <div className='blog-card'>
                        <h1><Link to='/blog/leveling-toram-online'>Leveling Toram Online Level 1-255 (2024)</Link></h1>
                        <div>
                            <img alt='veo' src={veotoram}></img>
                            <p>
                                Game ini menggabungkan dua hal favorit kamu dalam satu aktivitas permainan seru. Termasuk genre MMORPG,
                                game bernama lengkap Toram Online – Departure from Iruna – sudah hadir untuk pengguna Android dan iOS
                                sejak 2015.
                            </p>
                        </div>
                    </div>
                    <div className='blog-card'>
                        <h1><Link to='/'>Toram Online GUIDE (ID)</Link></h1>
                        <div>
                            <img alt='Toram Online BG' src={torambg}></img>
                            <p>
                            </p>
                        </div>
                    </div>
                    <div className='blog-card'>
                        <h1><Link to='/blog/bahan-mq-toram'>Bahan MQ Toram (2023 Update)</Link></h1>
                        <div>
                            <img alt='Toram Online BG' src={torambg}></img>
                            <p>
                            </p>
                        </div>
                    </div>
                        <Link to='/blog'>Show more...</Link>
                </div>
            </div>
        </div>
    </main>
    <Footer />
    </>
    )
}

export default Blog;
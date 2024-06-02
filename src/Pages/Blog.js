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
                <div id="blog">
                    <div className='blog-card'>
                        <Link to='/blog/leveling-toram-online'>Leveling Toram Online Level 1-255 (2024)</Link>
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
                        <Link to='/blog/toram-online-guide'>Toram Online GUIDE (ID)</Link>
                        <div>
                            <img alt='Toram Online BG' src={torambg}></img>
                            <p>
                            Lorem Ipsum dolor amet 2
                            </p>
                        </div>
                    </div>
                    <div className='blog-card'>
                        <Link to='/blog/bahan-mq-toram'>Bahan MQ Toram (2023 Update)</Link>
                        <div>
                            <img alt='Toram Online BG' src={torambg}></img>
                            <p>
                                Lorem Ipsum dolor amet 2
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
    </>
    )
}

export default Blog;
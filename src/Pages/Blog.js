import React from "react";
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import torambg from '../assets/img/toram background.jpeg'
import veotoram from '../assets/img/veo-toram.jpg'


import '../assets/css/blog.css';
import { Helmet } from "react-helmet";


const Blog = () => {
    
    return (
    <>
    <Helmet title='VEOveneht • Blog'/>
    <Navigation />
    <main>
        <div className='main-wrapper'>
            <div id="blog">
                <div className='blog-card'>
                    <Link to='/blog/leveling-toram-online'>Leveling Toram Online Level 1-255 (2024)</Link>
                        <div>
                            <Link to='/blog/leveling-toram-online'>
                                <img alt='veo' src={veotoram}></img>
                            </Link>
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
                        <Link to='/blog/toram-online-guide'>
                            <img alt='Toram Online BG' src={torambg}></img>
                        </Link>
                        <p>
                        Halo Petualang, selamat datang di blog saya.   Panduan  Pemula Seperti diketahui, 
                        Toram Online mengusung genre RPG dengan spesialisasi PvE atau  playing against monsters.  
                        Namun, kamu tetap bisa melakukan interaksi dengan pemain lain…
                        </p>
                    </div>
                </div>
                <div className='blog-card'>
                    <Link to='/blog/bahan-mq-toram'>Bahan MQ Toram (2023 Update)</Link>
                    <div>
                        <Link to='/blog/bahan-mq-toram'>
                        <img alt='Toram Online BG' src={torambg}></img>
                        </Link>
                        <p>
                        Kalo Males Farming! Halo Petualang! Selamat Datang di Blog Kami^^ 
                        Sekarang kita akan membahas tentang Bahan - bahan Untuk MQ disini 
                        kita bisa membelinya di Papan atau mendapatkannya dari Mob. 
                        Nah Untuk MQ (Main Quest / Misi Utama) Kita Membutuhkan  …
                        </p>
                    </div>
                </div>
            </div>
            <div id="sidebar-wrapper">
                <div className="support-card">
                    <p>Support Us</p>
                    <a onClick={()=> window.open("https://trakteer.id/veoveneht", "_blank")} href>
                        <img id="wse-buttons-preview" src='https://cdn.trakteer.id/images/embed/trbtn-red-1.png?date=18-11-2023' height="40" style={{border: '0px', height: '40px', cursor: 'pointer'}} alt="Trakteer Saya"/>
                    </a>
                </div>
            </div>
        </div>
    </main>
    <Footer />
    </>
    )
}

export default Blog;
import React, {Link} from 'react';
import torambg from '../assets/img/toram background.jpeg'
import veotoram from '../assets/img/veo-toram.jpg'
import '../assets/css/main.css';

const Main = () => {
    return (
        <main>
            <div id='blog'></div>
            <div className='container'>
                <div className='wrap'>
                    <h1>BLOG</h1>
                    <div id='blog'>
                        <div className='card'>
                            <img alt='veo' src={veotoram} style={{width: '30vh'}}></img>
                            <div className='bg-text'>
                            <Link to='/leveling-toram-online'>Leveling Toram Online Level 1-255 (2024)</Link>
                            </div>
                        </div>
                        <div className='card'>
                            <img alt='Toram Online BG' src={torambg} style={{width: '30vh'}}></img>
                            <div className='bg-text'>
                                <a href='/'> Toram Online GUIDE (ID)</a>
                            </div>
                        </div>
                        <div className='card'>
                            <img alt='Toram Online BG' src={torambg} style={{width: '30vh'}}></img>
                            <div className='bg-text'>
                                <a href='/'>Bahan MQ Toram (2023 Update)</a>
                            </div>
                        </div>
                    </div>
                    <a href='/blog'>Show more..</a>
                </div>
            </div>
        </main>
    )
}

export default Main;
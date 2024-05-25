import React, { useState, useEffect } from 'react';

const Main = () => {
    const [isBanner, setIsBanner] = useState(false);

    const banner = () => {
        const sticky = 0;
        if (window.pageYOffset > sticky) {
            setIsBanner(true);
        } else {
            setIsBanner(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', banner);
        return () => {
            window.removeEventListener('scroll', banner);
        };
    }, []);



    return (
        <main>
        <div className={isBanner ? 'banner': ''} ></div>
        </main>
    )
}

export default Main;
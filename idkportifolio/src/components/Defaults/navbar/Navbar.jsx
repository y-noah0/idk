import { useState, useEffect } from 'react';
import style from './Navbar.module.css';

function Navbar() {
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <div className={`${style.Navbar} ${visible ? '' : style.hidden}`}>
            <h1>site<sup>.</sup></h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/features">Features</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            <button>Get Started</button>
        </div>
    );
}

export default Navbar;
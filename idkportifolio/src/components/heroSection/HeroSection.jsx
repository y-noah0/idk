import style from './HeroSection.module.css';
import placeholder from '../../assets/images/Hero/hero.png';
import Trustedby from './trustedby';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
import Button from '../Defaults/Button/button';

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
    const imageContainer = useRef(null);

    useEffect(() => {
        gsap.to(imageContainer.current, {
            duration: 3,
            y: 50,
            ease: 'ease',
            yoyo: true,
            repeat: -1
        });
    }, []);

    return (
        <div className={style.container}>
            <div className={style.HeroSection}>
                <div className={style.word_container}>
                    <p className={style.promo}><span>New </span>Our Prices Just Dropped 30% Off</p>
                    <h1>Powering Your Business with Innovative Software</h1>
                    <p>Streamline operations and boost growth with our tailored software solutions. We help you succeed in the digital age.</p>
                    <Button>Get Started</Button>
                </div>
                <div className={style.image_container} ref={imageContainer}>
                    <img src={placeholder} alt="Hero" />
                </div>
            </div>
            <Trustedby />
        </div>
    );
}

export default HeroSection;

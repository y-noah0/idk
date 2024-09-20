import style from './HeroSection.module.css';
import placeholder from '../../assets/images/Hero/hero.png';
import Button from '../Defaults/CTA/button';
import Trustedby from './trustedby';

function HeroSection() {
    return (
        <>
            <div className={style.HeroSection}>
                <div className={style.word_container}>
                    <p className={style.promo}><span>New </span>Our Prices Just Dropped 30% Off</p>
                    <h1>Powering Your Business with Innovative Software</h1>
                    <p>Streamline operations and boost growth with our tailored software solutions. We help you succeed in the digital age.</p>
                    <Button>Get Started</Button>
                </div>
                <div className={style.image_container}>
                    <img src={placeholder} alt="" />
                </div>
            </div>
            <Trustedby/>
        </>
    );
}

export default HeroSection;

import style from './HeroSection.module.css'
import placeholder from '../../assets/images/pexels-pixabay-38519.jpg'


function HeroSection() {
    return(
        <div className={style.HeroSection}>
            <div className={style.word_container}>
                <h1>Get a Brand New Look That Matches Your Business</h1>
                <p>Our design solutions ensure your brand stands out with a modern, professional appearance that resonates with your customerbase</p>
            </div>
            <div className={style.image_container}>
                <img src={placeholder} alt="" />
            </div>
        </div>
    )
}
export default HeroSection
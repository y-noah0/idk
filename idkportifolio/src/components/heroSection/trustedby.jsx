import style from './trustedby.module.css'
import brioche from '../../assets/images/Trustedby/logo_brioche.webp'
import infinity from '../../assets/images/Trustedby/infinity_logo.png'
import {gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)
function Trustedby (){
    const logo = useRef(null);

    useEffect(() => {
        gsap.to(logo.current,{
            x: 300,
            repeat: -1,
            ease: 'ease-in-out',
            duration: 2,
            yoyoEase: true
        })
    })
    return (
        <div className={style.trustedby}>
            <div className={style.word_container}>Trusted by top Innovative Companies:</div>
            <div className={style.logo_container}  ref={logo}>
                <div className={style.logo}><img src={brioche} alt="idk brioche" />Brioche</div>
                <div className={style.logo}><img src={infinity} alt="idk infinity" />Infinity</div>
            </div>
        </div>
    )
}
export default Trustedby

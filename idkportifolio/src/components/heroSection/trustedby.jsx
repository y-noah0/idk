import style from './trustedby.module.css'
import brioche from '../../assets/images/Trustedby/logo_brioche.webp'
import infinity from '../../assets/images/Trustedby/infinity_logo.png'

function Trustedby (){
    return (
        <div className={style.trustedby}>
            <div className={style.word_container}>Trusted by top Innovative Companies:</div>
            <div className={style.logo_container}>
                <img src={brioche} alt="idk brioche" />
                <img src={infinity} alt="idk Infinity" />
            </div>
        </div>
    )
}
export default Trustedby

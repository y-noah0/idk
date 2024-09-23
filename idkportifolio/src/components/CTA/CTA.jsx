import style from './cta.module.css'
import Button from '../Defaults/Button/button'
function Cta(){
    return (
        <div className={style.cta}>
            <p>Join our community today</p>
            <Button text="Discover More" />
        </div>
    )
}

export default Cta;
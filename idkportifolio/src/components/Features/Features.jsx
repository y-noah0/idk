import style from './Features.module.css'
import image from '../../assets/images/Features/image.png'
import Cards from './cards/Cards';


function Features(){
  return (
    <div className={style.container}>
        <p>Everything You Need!</p>
        <h3>Leverage cutting-edge software to simplify business operations and <br />drive growth.</h3>
        <img src={image} alt="" />
        <Cards/>
    </div>
  )  
}
export default Features;
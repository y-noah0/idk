import features from '../../../assets/images/Features/icons/cards.png'
import featuresTab from '../../../assets/images/Features/icons/cardsTab.png'
import featuresPhone from '../../../assets/images/Features/icons/cardsPhone.png'
import style from './Cards.module.css'

function Cards(){
  return (
    <div>
      <div className={style.cards}>
        <img src={features} alt="cards" className={style.desktop}/>
        <img src={featuresTab} alt="cardsTab" className={style.tab}/>
        <img src={featuresPhone} alt="cardsTab" className={style.phone}/>
      </div>
    </div>
  );
}

export default Cards;
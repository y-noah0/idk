import style from './Testimonials.module.css';

function Testimonials(){
  return(
    <div className={style.container}>
      <div className={style.word_container}><p>Over 23+ <br />Happy Clients</p></div>
      <div className={style.card_container}>
        <div className={style.card}>
          <div className={style.titlebar}>
            <img src="https://via.placeholder.com/150" alt="What brioche thinks about idk" />
            <p>Amanda Nelson</p>
          </div>
          <p className={style.quote}>&quot;I absolutely love using idk! It&#39;s a great way to build innovative solutions without having to worry about the details.&quot;</p>
          <p className={style.title}>CEO, BRIOCHE</p>
        </div>
        </div>
    </div>
  )
  
}

export default Testimonials;
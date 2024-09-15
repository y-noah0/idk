import React from 'react'
import style from './Stats.module.css'

export default function Stasts() {
  return (
    <div className={style.container}>
        <div className={style.statsShapes}>
           <div className={style.rhombus}>
             <p>React js</p>  
           </div>
           <div className={style.rhombus}>
           <p>Javascript </p>
           </div>
           <div className={style.rhombus}>
           <p> Html & Css</p>
           </div>
        </div>


        <div className={style.reviews}>
            <p>
                happy clients from all around the world
               <br /> 100+ 
                
            </p>
        </div>
    </div>
  )
}

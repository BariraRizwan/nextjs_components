import React from 'react'
import Css from "./hero.module.css"

const Herosection = () => {
  return (
    <div>
        <div className={Css.hero}>
            <h3 className={Css.herostyle}>
                This is a hero section
            </h3>
        </div>
    </div>
  )
}

export default Herosection
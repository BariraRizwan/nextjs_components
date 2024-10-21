import React from 'react'
import Style from "./header.module.css"



const Header = () => {
  return (
    <div>
        <div className={Style.header}>
         <h4 className={Style.head}>This is a header component</h4>
         </div>
    </div>
  )
}

export default Header;
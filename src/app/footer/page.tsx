import React from 'react'
import  Style  from './footer.module.css'

const Footer = () => {
  return (
    <div>
       
        <footer>
        <div className={Style.footer}>
            <p className={Style.footertext}>This is a footer component</p>
            </div>
        </footer>
    
    </div>
  )
}

export default Footer;
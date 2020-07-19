import React from 'react';
import Logo from '../../Image/image.png'
import Styles from './Navbar.module.css'

export default function Navbar() {

    return (
        <div className={Styles.Navbar}>
          <img src={Logo} alt=""/> 
        </div>
    )
}

import React from 'react'
import logo from '../img/fashionlogo.png'
import estilo from '../estilos/Header.css'

const Header = () => {
  return (
    <div>
      <div className='Fashion-container'>
          <img src={logo}></img>
          <h1 className='Fashion-title'>Fashion</h1>
        <ul className='Fashion-options'>
        <li>Catalogo</li>
        <li>Fashion</li>
        <li>Favoritos</li>
        <li>Lifestyle</li>
        <li className='login'>Sing Up</li>
      </ul>
      </div>
    </div>
  )
}

export default Header

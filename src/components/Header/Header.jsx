import React from 'react'
import logo from '../../static/icons/triviaPerson.svg'
import './Header.scss'
const Header = ({ activeImage = true }) => {
  return (
    <div className="header">
      <div >
        <div className="h1 text-white bold">TRIVIA GAME</div>
      </div>
      <div className={activeImage ? 'position-relative' : 'd-none'}>
        <img className="img-fluid position-absolute trivia" id="img-header" src={logo} alt="Person Trivia" />
      </div>
    </div>
  )
}

export default Header

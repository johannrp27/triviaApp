import React from 'react'
import { withRouter } from 'react-router-dom'
import logo from '../../static/icons/triviaPerson.svg'
import './Header.scss'

const Header = ({ location }) => {
  return (
    <div className="header">
      <div >
        <div className="h1 text-white bold">TRIVIA GAME</div>
      </div>
      <div className={location.pathname.search(/404|results/gmi) >= 0 ? 'd-none' : 'position-relative'}>
        <img className="img-fluid position-absolute trivia" id="img-header" src={logo} alt="Person Trivia" />
      </div>
    </div>
  )
}

export default withRouter(Header)

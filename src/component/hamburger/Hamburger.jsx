import React from 'react'
import './hamburger.style.scss'
import { FaBars, FaTimes } from 'react-icons/fa'

export const Hamburger = (props) => {
  return (
    <div className='ham'>
    <div className={props.toggleValue ? 'menu-bar-general' : 'menu-bar-desktop'} onClick={props.toggleHandler}>
        <FaBars />
    </div>
    <div className={`${props.cancelValue ? 'display' : 'menu-bar-general'} menu-bar-desktop`} onClick={props.cancelhandler}>
        <FaTimes />
    </div>
    </div>
  )
}

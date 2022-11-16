import React from 'react'
import { ReactComponent as Logo1 } from '../../assets/logo1.svg'
import { ReactComponent as Logo2 } from '../../assets/logo2.svg'
import { Link } from 'react-router-dom'
import './header.style.scss'
import { Hamburger } from '../hamburger/Hamburger'

export const Header = (props) => {
  return (
    <nav className='nav-container'>
        <div className='nav-logo'>
            <Logo1 className='logo-icon' />
            <Logo2 className='logo-name'/>
        </div>

        <div className={`${props.toggled ? 'display-menu-general' : 'display-none'}`}>
            <div className='nav-main-link'>
                <Link className='nav-link' to='/'>
                    Home
                </Link>
                <Link className='nav-link' to='/place'>Place to stay</Link>

                <Link className='nav-link'>
                    NFTs
                </Link>

                <Link className='nav-link'>
                    Community
                </Link>
            </div>
            <div className={`${props.toggled ? 'nav-wallet-general' : 'nav-wallet-desktop'} `}>
                <Link className='nav-link' onClick={props.walletToggledHandler}>Connect wallet</Link>
            </div>
        </div>

        <div className='display-menu-desktop nav-main-link'>
            <Link className='nav-link' to='/'>
                Home
            </Link>

            <Link className='nav-link' to='/place'>
                Place to stay
            </Link>

            <Link className='nav-link'>
                NFTs
                {props.displayCancel}

            </Link>

            <Link className='nav-link'>
                Community
            </Link>
        </div>

        <div className='display-none nav-wallet-desktop'>
            <Link className='nav-link nav-wallet' onClick={props.walletToggledHandler}>Connect wallet</Link>
        </div>

        <Hamburger toggleHandler={props.toggleHandler} toggleValue={props.toggled} cancelhandler={props.cancelhandler} cancelValue={props.displayCancel} />
    </nav>
  )
}

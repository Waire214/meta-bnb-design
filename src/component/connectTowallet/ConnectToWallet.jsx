import React from 'react'
import {ReactComponent as Wallet } from '../../assets/Frame37.svg'
import './connectToWallet.style.scss'

export const ConnectToWallet = (props) => {
    console.log(props.click)
  return (
    <div className={`wallet-container ${props.toggle ? 'wallet-display' : 'wallet-no-display'} ${props.click ? 'remove-wallet' : ''}`} >
        <Wallet className='wallet' onClick={props.handleClick} />
    </div>
  )
}

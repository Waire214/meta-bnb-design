import React from 'react'
import { Footer } from '../../component/footer/Footer'
import { Header } from '../../component/header/Header'
import Main from '../../component/main/Main'
import { SubHeader } from '../../component/subheader/SubHeader'
import { Submain } from '../../component/submain/Submain'
import './home.style.css'

export const Home = (props) => {
  return (
    <div className={props.opaque ? 'opaque' : ''}>
        <Header toggled={props.toggled} displayCancel={props.displayCancel} walletToggled={props.walletToggled} toggleHandler={props.toggleHandler} cancelhandler={props.cancelhandler} walletToggledHandler={props.walletToggledHandler}  />
        <SubHeader />
        <Main />
        <Submain />
        <Footer />
    </div>
  )
}

import React from 'react'
import './footer.style.scss'
import { ReactComponent as Logo3 } from '../../assets/logo3.svg'
import { ReactComponent as Logo4 } from '../../assets/logo4.svg'
import { ReactComponent as Facebook } from '../../assets/facebook.svg'
import { BsInstagram } from 'react-icons/bs'
import { ReactComponent as Twitter } from '../../assets/twitter.svg'
import { ReactComponent as Copy } from '../../assets/copy.svg'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='footer-container'>
      <section className='footer-section footer-icons'>
        <div className='metabnb-icon'>
          <Logo3 />
          <Logo4 />
        </div>
        <div className='icon'>
          <Facebook />
          <BsInstagram className='insta' />
          <Twitter />
        </div>
        <div className='icon'>
          <Copy />
          <span className='text'>2022 Metabnb</span>
        </div>
      </section>
      <section className='footer-section'>
        <p className='insta footer-p'>Community</p>
        <Link className='text'>NFT</Link>
        <Link className='text'>Tokens</Link>
        <Link className='text'>Landlord</Link>
        <Link className='text'>Discord</Link>
      </section>
      <section className='footer-section'>
        <p className='insta footer-p'>Places</p>
        <Link className='text'>Castle</Link>
        <Link className='text'>Farms</Link>
        <Link className='text'>Beach</Link>
        <Link className='text'>Learn more</Link>
      </section>
      <section className='footer-section'>
        <p className='insta footer-p'>About us</p>
        <Link className='text'>Road map</Link>
        <Link className='text'>Creators</Link>
        <Link className='text'>Career</Link>
        <Link className='text'>Contact us</Link>
      </section>
    </footer>
  )
}

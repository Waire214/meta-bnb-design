import React, { Component } from 'react'
import Places from '../../component/properties/place'
import { ImageBox } from '../../component/ImageBox/ImageBox'
import './place.style.scss'
import { Link } from 'react-router-dom'
import { Hamburger } from '../../component/hamburger/Hamburger'
import { BsFilter } from 'react-icons/bs'
import { Header } from '../../component/header/Header'
import { Footer } from '../../component/footer/Footer'


export class Place extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         places: Places,
         toggled: false,
         cancel: false,
      }
    }

  handleToggleMenu = () => {
      this.setState({toggled: true})
      this.setState({cancel: true})
      console.log(this.state)
  }

  handleToggleCancel = () => {
    this.setState({toggled: false})
    this.setState({cancel: false})
  }

  render() {
    const {places, toggled, cancel} = this.state

    return (
      <div className={this.props.opaque ? 'opaque' : ''}>
        <Header toggled={this.props.toggled} displayCancel={this.props.displayCancel} walletToggled={this.props.walletToggled} toggleHandler={this.props.toggleHandler} cancelhandler={this.props.cancelhandler} walletToggledHandler={this.props.walletToggledHandler}  />

        <div className='main-container'>
          <div className={`${toggled ? '' : 'link-input-container'}`}>
            <Hamburger toggleHandler={this.handleToggleMenu} toggleValue={toggled} cancelhandler={this.handleToggleCancel} cancelValue={cancel} />
            <div className={`${toggled ? 'filter' : "normal-filter"}`}>
              <Link className='link link-filter'>Resturant</Link>
              <Link className='link link-filter'>Cottage</Link>
              <Link className='link link-filter'>Castle</Link>
              <Link className='link link-filter'>fantast city</Link>
              <Link className='link link-filter'>beach</Link>
              <Link className='link link-filter'>Carbins</Link>
              <Link className='link link-filter'>Off-grid</Link>
              <Link className='link link-filter'>Farm</Link>

              <label htmlFor="search" className='remove-input1 input-label'>
              <input type="text" name='search' placeholder='location' className='input' />
              <BsFilter />
              </label>

            </div>
            
            <label htmlFor="search" className='remove-input input-label'>
              <input type="text" name='search' placeholder='location' className='input' />
              <BsFilter />
            </label>
          </div>
          <div className={`image-container ${toggled ? 'opaque' : ''}`}>
                  {
                      places.map(val => (
                          <ImageBox 
                              key={val.id} 
                              propVal={val}
                          />
                      ))
                  }
              </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Place
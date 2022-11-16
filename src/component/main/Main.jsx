import React, { Component } from 'react'
import { ImageBox } from '../ImageBox/ImageBox'
import Places from '../properties/place'
import './main.style.scss'

export default class Main extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        places: Places,
      }
    }

  render() {
    const {places} = this.state

    return (
        <div className='main-container'>
            <h2 className='main-header'>Inspiration for your next adventure</h2>
            <div className='image-container'>
                {
                    places.map(val => ( val.main ?
                        <ImageBox 
                            key={val.id} 
                            propVal={val}
                        /> : ""
                    ))
                }
            </div>
        </div>
    )
  }
}

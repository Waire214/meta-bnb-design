import React from 'react'
import './imagebox.style.scss'
import { ReactComponent as Star } from '../../assets/placesImages/star.svg'

export const ImageBox = (props) => {
  return (
    <figure className='figure'>
        <img src={props.propVal.img} alt="places" className='image-icon' />
        <figcaption className='figCaption'>
            <div>
                <p className='normal-text'>Desert king</p>
                <p className='normal-text'>2345km away</p>
                <p>
                    <Star className='star' />
                    <Star className='star' />
                    <Star className='star' />
                    <Star className='star' />
                    <Star className='star' />
                </p>
            </div>
            <div>
                <p className='normal-text cost-text'>1MBT per night</p>
                <p className='normal-text'>available for 2weeks stay</p>
            </div>
        </figcaption>
    </figure>
  )
}

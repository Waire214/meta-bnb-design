import React from 'react'
import './subheader.style.scss'
import { ReactComponent as Image1 } from '../../assets/homepageImages/image1.svg'
import { ReactComponent as Image2 } from '../../assets/homepageImages/image2.svg'
import { ReactComponent as Image3 } from '../../assets/homepageImages/image3.svg'
import { ReactComponent as Image4 } from '../../assets/homepageImages/image4.svg'

export const SubHeader = () => {
  return (
        <div className='subheader-container'>
          <section className='subheader-section'>
            <div className='text-container'>
              <div>
                  <h2 className='sub-header-heading'>Rent a <span>Place</span> away from <br /> <span>Home</span> in the <span>Metaverse</span></h2>
                  <p className='sub-header-text'>we provide you access to luxury and affordable houses <br />in the metaverse, get a chance to turn your <br />imagination to reality at your comfort zone</p>
                </div>
                <div className='input-container'>
                    <input type="text" placeholder='Search for location' className='input-style' />
                    <button className='input-style input-btn'>Submit</button>
                </div>
            </div>

            <div className='image-container'>
                <span className='pad-image span-image'>
                  <Image1 />
                  <Image2 className='display-none display-2' />
                </span>
                <span className='span-image'>
                  <Image3 className='display-none display-3-4' />
                  <Image4 className='display-none display-3-4' />
                </span>
            </div>
          </section>
          <section className='type-icon-container'>
            <span>MBToken</span>
            <span>METATASK</span>
            <span>OpenSea</span>
          </section>
        </div>
  )
}

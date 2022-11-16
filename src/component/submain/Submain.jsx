import React from 'react'
import { ReactComponent as Sub1 } from '../../assets/sub1.svg'
import { ReactComponent as Sub2 } from '../../assets/sub2.svg'
import { ReactComponent as Sub3 } from '../../assets/sub3.svg'

import './submain.style.scss'

export const Submain = () => {
  return (
    <section className='submain-container'>
        <div className='div-sub'>
            <p className='big-p'>Metabnb NFTs</p>
            <p className='small-p'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>

            <button>Learn more</button>
        </div>
        <div className='sub-icons div-sub'>
            <Sub1 className='sub1'/>
            <Sub2 className='sub2 none' />
            <Sub3 className='sub3'/>
        </div>
    </section>
  )
}

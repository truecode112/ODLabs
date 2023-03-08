import React from 'react'
import './responsive.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-body'>
            <div className='width-33-2'>
                <img src = 'odlabs.png'></img>
            </div>
            <div className='footer-middle-link'>
                <div>TERM & CONDITIONS</div>
                <div>PRIVACY</div>
                <div>LICENSE</div>
                <div>NFT PURCHASE AGREEMENT</div>
            </div>
            <div className='width-16 flex flex-nowrap justify-center text-lg space-x-8'>
                <img src = 'icon2.png' className='h-[30px]'></img>
                <img src = 'icon3.png' className='h-[30px]'></img>
                <img src = 'icon1.png' className='h-[30px]'></img>
            </div>
        </div>
    </div>
  )
}

export default Footer
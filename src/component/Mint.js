import React from 'react'
import './responsive.css'

function Mint() {
  return (
    <>
        <div className='navbar space-x-6'>
            <a href='/mint'>MINT</a>
            <a href='/rewards'>REWARDS</a>
            <a href='/tryme'>TRY ME</a>
        </div>
        <div className='mint-body'>
            <div className='basis-1/3'>
              <div className='text-div-right font-bold text-6xl'>Properties</div>
              <div className='text-div-right font-semibold mt-12 text-4xl'>Composition</div>
              <div className='mt-4 flex flex-nowrap text-[24px]'>
                <div className='text-right width-66 pr-4'>
                  <div>Cerebellum</div>
                  <div>Brain stem</div>
                  <div>Temporal Lobe</div>
                  <div>Occipital Lobe</div>
                  <div>Parietal Lobe</div>
                  <div>Frontal Lobe</div>
                  <div>Pineal Glands</div>
                  <div>Broca</div>
                  <div>Teeth</div>
                </div>
                <div className='width-33 font-semibold'>
                  <div>: Mint</div>
                  <div>: Blue</div>
                  <div>: Orange</div>
                  <div>: Dark Blue</div>
                  <div>: Yellow</div>
                  <div>: Red</div>
                  <div>: Green</div>
                  <div>: Red</div>
                  <div>: White</div>
                </div>
              </div>
            </div>
            <div className='basis-1/3 w-full'>
              <div className='mint-body-image'>
                <img src='/qrcode.png' className='rounded-xl mx-auto pt-[170px]'></img>
                <div className='text-center text-white text-4xl mt-8 w-[180px] mx-auto font-extrabold	'>SCAN<br/>QR CODE</div>
              </div>
            </div>
            <div className='basis-1/3 ml-4'>
              <div className='text-div-left font-bold text-6xl'>LULU</div>
              <div className='text-div-left font-bold text-4xl'>1 of 10,000</div>
              <div className='text-div-left mt-16 text-lg font-semibold	max-w-[500px] min-w-[300px] mx-auto'>
                <div>LULU Monster</div>
                <div>
                  The first on chain "Mixed Reality" collectible.
                  A new world of possibility awaits you through
                  the magic of Mixed Reality, LULU will be your
                  companion and show you this new world.
                </div>
                <div className='mt-8'>
                  A new journey awaits you!
                </div>
                <div className='items-end'>
                  <button className='bg-[#4d4d4d] rounded-lg w-[170px] h-[70px] text-white text-3xl'>MINT</button>
                </div>
              </div>
            </div>
        </div>
        <div className='flex justify-center mt-4'>
          <img src='/icon4.png'></img>
        </div>
    </>
  )
}

export default Mint
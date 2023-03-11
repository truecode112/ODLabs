import React from 'react'

function Tryme() {
  return (
    <>
      <div className='navbar space-x-6'>
        <a href='/mint'>MINT</a>
        <a href='/rewards'>REWARDS</a>
        <a href='/tryme'>TRY ME</a>
      </div>
      <div className='mx-4'>
        <div className='tryme-response mt-16 w-full'>
          <div className='basis-1/3 mx-auto min-w-[300px] max-w-[600px]'>
            <img src='/qrcode.png' className='mx-auto rounded-[16px] mt-24'></img>
            <img src='/img1.png' className='mx-auto rounded-[16px] mt-24'></img>
          </div>
          <div className='basis-1/3 mx-auto min-w-[300px] max-w-[600px]'>
            <img src='/qrcode.png' className='mx-auto rounded-[16px] mt-24'></img>
            <img src='/img2.png' className='mx-auto rounded-[16px] mt-24'></img>
          </div>
          <video
            controls
            className='basis-1/3 min-w-[300px] max-w-[450px] min-h-[400px] p-[40px] mx-auto'
          >
            <source src='/try_me_video.mov' type='video/mp4' />
          </video>
        </div>
      </div>
    </>
  )
}

export default Tryme
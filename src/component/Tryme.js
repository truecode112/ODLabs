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
            <div className='basis-1/3 min-w-[300px] max-w-[600px]'>
              <img src='/qrcode.png' className='mx-auto rounded-xl mt-16'></img>
              <img src='/img1.png' className='mx-auto rounded-xl mt-16'></img>
            </div>
            <div className='basis-1/3 min-w-[300px] max-w-[600px]'>
              <img src='/qrcode.png' className='mx-auto rounded-xl mt-16'></img>
              <img src='/img2.png' className='mx-auto rounded-xl mt-16'></img>
            </div>
            <div className='basis-1/3 min-w-[300px] max-w-[600px] min-h-[400px]  p-[60px] bg-black mx-8' />
          </div>
        </div>
    </>
  )
}

export default Tryme
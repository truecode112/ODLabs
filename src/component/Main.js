import React, { useState, useRef } from 'react';
import { Player } from 'video-react'

function Main() {
  return (
    <>
        <div className='navbar space-x-6'>
            <a href='/mint'>MINT</a>
            <a href='/rewards'>REWARDS</a>
            <a href='/tryme'>TRY ME</a>
        </div>
        <div className='mx-8 main-body'>
          <video 
            controls 
            className='main-body-background mt-2 mb-4 ml-2 mr-2'
          >
            <source src='/main_page_video.mov' type='video/mp4' />
          </video>
          {/* <div className='main-body-background mt-2 mb-4 ml-2 mr-2'>
            <img src='/play.png' className='play-button'></img>
          </div> */}
        </div>
    </>
  )
}

export default Main
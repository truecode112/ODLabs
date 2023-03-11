import React from 'react'
import './responsive.css'

function Mint() {

  const [showModal, setShowModal] = React.useState(false);

  const handleClickAR = () => {
    setShowModal(true);
  };

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center">
                    SCAN QR CODE
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <img src='/qrcode.png' className='rounded-xl mx-auto'></img>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
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
          <div className='flex justify-center mb-1 cursor-pointer' onClick={handleClickAR}>
            <img src='/icon4.png'></img>
          </div>
          <div className='mint-body-image'>
            <video
              controls
              className='rounded-xl mx-auto h-[100%]'
            >
              <source src='/nft_preview.mov' type='video/mp4' />
            </video>
          </div>
        </div>
        <div className='basis-1/3 ml-4'>
          <div className='text-div-left font-bold text-6xl'>LULU</div>
          <div className='text-div-left font-bold text-4xl'>1 of 10,000</div>
          <div className='text-div-left mt-16 text-lg font-semibold	max-w-[500px] min-w-[300px] mint-text'>
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
              <button className='bg-[#4d4d4d] rounded-lg w-[170px] h-[70px] text-white text-3xl mt-8'>MINT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mint
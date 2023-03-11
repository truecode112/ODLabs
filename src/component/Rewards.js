import React from 'react'

function Rewards() {
  return (
    <>
      <div className='navbar space-x-6'>
        <a href='/mint'>MINT</a>
        <a href='/rewards'>REWARDS</a>
        <a href='/tryme'>TRY ME</a>
      </div>
      <div className='mx-[20px] rewards-content mt-[60px] justify-center'>
        <div className='rewards-board width-40 justify-center'>
          <div className='width-680'>
            <div className='w-full flex flex-nowrap'>
              <div className='w-2/3 pl-[40px] min-w-450'>
                <label className='text-[28px] font-bold'>Leader Board</label>
              </div>
              <div className='w-1/3'>
                <label className='text-[28px] font-bold'>score</label>
              </div>
            </div>
            <div className='w-full h-[600px] outline outline-2 outline-black mt-2 flex flex-nowrap overflow-auto'>
              <div className='w-3/4 pl-[40px] min-w-450 h-[450px]'>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd3472733734y39483843483</div>
                <div className='text-[28px] truncate font-bold text-white'>0xd4736487328427436287343</div>
              </div>
              <div className='w-1/4'>
                <div className='text-[28px] font-bold text-white'>18</div>
                <div className='text-[28px] font-bold text-white'>17</div>
                <div className='text-[28px] font-bold text-white'>13</div>
              </div>
            </div>
          </div>
        </div>
        <div className='width-30 rewards-middle justify-center'>
          <div className='w-100 items-end flex flex-col justify-between'>
            <div className='w-1/2 padding-40'>
              <div className='text-xl font-bold'>Your Wallet</div>
              <div className='text-xl font-bold text-white'>0xd3472733734y39483843483</div>
              <div className='text-xl font-bold mb-4'>SCORE - 18</div>
              <button className='text-xl font-bold outline outline-2 outline-black w-[120px] h-[32px]'>4.3ETH</button>
              <button className='text-xl font-semibold outline outline-2 outline-black rounded-[18px] w-[160px] h-[32px] ml-4'>CLAIM REWARD</button>
            </div>
            <div className='h-[120px] w-full'>
              <div className='font-bold text-3xl text-center'>Wallet</div>
              <div className='flex flex-col justify-center items-center'>
                <button className='text-2xl font-semibold outline outline-2 outline-black rounded-[18px] w-[150px] mt-2'>Disconnect</button>
                <button className='text-2xl font-semibold outline outline-2 outline-black rounded-[18px] w-[150px] mt-2'>Reconnect</button>
              </div>

            </div>
          </div>
        </div>

        <div className='rewards-right-content width-30 justify-center'>
          <div className='w-1/2'>
            <div className='padding-40'>
              <div className='text-xl font-bold'>Leader Rewards</div>
              <div className='text-xl font-bold text-white'>REWARDS EARNED</div>
              <div className='h-[200px] overflow-auto'>
                <div className='text-xl font-bold text-white'>.0333 ETH</div>
                <div className='text-xl font-bold text-white'>.0333 ETH</div>
                <div className='text-xl font-bold text-white'>.0333 ETH</div>
                <div className='text-xl font-bold text-white'>.0333 ETH</div>
                <div className='text-xl font-bold text-white'>.0333 ETH</div>
                <div className='text-xl font-bold text-white'>.0333 ETH</div>
                <div className='text-xl font-bold text-white'>.0333 ETH</div>
                <div className='text-xl font-bold text-white'>.0333 ETH</div>
                <div className='text-xl font-bold text-white'>.0333 ETH</div>
                <div className='text-xl font-bold text-white'>.0333 ETH</div>
                <div className='text-xl font-bold text-white'>.0333 ETH</div>
                <div className='text-xl font-bold text-white'>.0333 ETH</div>
              </div>
              <div className='text-2xl font-bold text-white mt-8'>.0999 ETH Available</div>
              <button className='text-2xl font-bold outline outline-2 outline-black rounded-[18px] w-[200px] h-[40px] ml-4'>CLAIM REWARD</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rewards
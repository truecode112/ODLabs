import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  const onClickMain = () => {
    navigate('/');
  }
  return (
    <nav className="border-b md:shadow-lg items-center relative h-[90px] bg-white flex flex-row">
        <div src='OD.png' className='basis-1/4'></div>
        <div className='flex basis-1/2 justify-center'>
            <img src='OD.png' className='max-w-[120px] max-h-[90px] cursor-pointer' onClick={onClickMain}></img>
        </div>
        <div className="text-lg font-bold md:py-0 py-4 basis-1/4">
            <div className='text-right flex flex-nowrap'>CONNECT WALLET</div>
        </div>
    </nav>
  )
}

export default Navbar
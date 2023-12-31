import React from 'react'
import image from '../assets/3682410.jpg'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
const Header = () => {
  return (
    <>
<div className="h-20 bg-[#EFF0FC] flex flex-row p-5">
   <div className=""><img src={image} alt="akki" className='h-10 w-20 ' /></div> 
    <div className="grid grid-cols-1 pl-10">
      <div className="font-bold text-2xl">SciAstra</div>
     
      </div>
      <div>
      <div className="fixed right-0 top-0">
      <div className='flex text-center justify-center mt-5'>
      <div className="bg-white flex text-center justify-center rounded-full pt-2 h-10 w-10 "><HeadphonesIcon/></div>
      <div className="bg-white flex text-center justify-center rounded-full pt-2 h-10 w-10 ml-5 mr-14"><NotificationsNoneIcon/></div>
      </div>    
      </div>
      </div>

    </div>
  </>
  )
}

export default Header








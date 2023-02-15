import React from 'react'
import Footer from './Footer'
import Newchat from './Newchat'

const Sidebar = () => {
  return (
    <div className=' w-1/6 bg-[#202123] text-white p-2'>
      <Newchat />
      <Footer />
    </div>
  )
}

export default Sidebar
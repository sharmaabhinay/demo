import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-15 text-white '>
        <div className='text-xl flex items-center gap-2'>
            <div className='bg-blue-500 p-3 rounded-full px-5 font-bold'>A</div>
            <div>Abhinay Sharma</div>
            
        </div>
        <div className='flex gap-20 '>
            <div className='hover:border-b-2 border-orange-400'>About me</div>
            <div className='hover:border-b-2 border-orange-400'>Skills</div>
            <div className='hover:border-b-2 border-orange-400'>Hobbies & interest</div>
            <div className='hover:border-b-2 border-orange-400'>Passion</div>
        </div>
    </div>
  )
}

export default Navbar
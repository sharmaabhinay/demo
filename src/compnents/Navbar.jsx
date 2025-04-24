import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-15 text-white '>
        <div className='text-xl flex items-center gap-2'>
            <div className='bg-blue-500 p-3 rounded-full px-5 font-bold'>A</div>
            <div>Abhinay Sharma</div>
            
        </div>
        <div className='flex gap-20 '>
            <div>About me</div>
            <div>Skills</div>
            <div>Hobbies & interest</div>
            <div>Passion</div>
        </div>
    </div>
  )
}

export default Navbar
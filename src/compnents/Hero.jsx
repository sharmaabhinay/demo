import React from 'react'

const Hero = () => {
  return (
    <div className='flex w-[60%] m-auto items-center justify-between my-20'>
        <div className='w-[30%]'>
            <img src="https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg"
            className='h-60 rounded-full border-12 border-gray-200'
             alt="" />
        </div>
        <div className='w-[60%] text-white flex flex-col gap-3'>
            <p className=''>Frontend Developer</p>
            <strong className='text-3xl font-bold'>Abhinay Sharma</strong>
            <p>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
            <div className='flex gap-4'>
                <a href="#" download className='border-blue-500 border-2 py-2 px-4 rounded-full bg-gray-700 hover:bg-blue-400'>Download CV</a>
            <button className=' border-2 py-2 px-4 rounded-full bg-gray-700 hover:bg-gray-900 cursor-pointer'>Contact</button>
            </div>
            
        </div>
    </div>
  )
}

export default Hero
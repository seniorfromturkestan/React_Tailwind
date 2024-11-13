import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-start justify-between w-full'>
                    <input className='p-3 w-full rounded-md text-black' type="email" placeholder='Enter yout email' />
                    <button className="bg-[#00df9a] w-[200px] rounded-md sm:ml-4  font-medium mt-3 sm:mt-0 py-3 px-6 text-black">Notify me</button>

                </div>
                <p className='mt-3'>We care bout the protection of your data.  Read out <span className='text-[#00df9a]'>Privacy Policy</span></p>
            </div>
        </div>

    </div>
  )
}

export default Newsletter
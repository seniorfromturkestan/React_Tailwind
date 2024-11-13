import React from 'react'
import Laptop from '../assets/laptop.png'


const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center sm:ml-4'>
                <p className='uppercase text-[#00df9a] font-bold'>Data analytics dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centerally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat asperiores debitis modi, dignissimos voluptatum veniam consectetur suscipit eaque reiciendis eos rerum itaque dolores cupiditate, ipsum, esse adipisci iusto ad repudiandae.</p>
                <button className="bg-black w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0 text-[#00df9a] hover:text-black hover:bg-[#00df9a] transition duration-150">Get Started</button>

            </div>

        </div>

    </div>
  )
}

export default Analytics
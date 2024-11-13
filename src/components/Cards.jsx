import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 cursor-pointer duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/"  />
                <h1 className='text-2xl font-bold text-center py-8  mt-10'>Single user</h1>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Sen up to 2 GB</p>
                </div>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto  text-black hover:text-[#00df9a] hover:bg-black transition duration-150">Start Trial</button>
            </div>
            <div className='w-full shadow-xl  flex flex-col py-4 my-4 rounded-lg hover:scale-105 cursor-pointer duration-300'>
                <img className='w-40 mx-auto mt-[-3rem] bg-white' src={Double} alt="/"  />
                <h1 className='text-2xl font-bold text-center py-8  mt-8'>Single user</h1>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Sen up to 2 GB</p>
                </div>
                <button className="bg-black w-[200px] rounded-md font-medium my-6 py-3 mx-auto  text-[#00df9a] hover:text-black hover:bg-[#00df9a] transition duration-150">Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 cursor-pointer duration-300'>
                <img className='w-52 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/"  />
                <h1 className='text-2xl font-bold text-center py-8 mt-5'>Single user</h1>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Sen up to 2 GB</p>
                </div>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto  text-black hover:text-[#00df9a] hover:bg-black transition duration-150">Start Trial</button>
            </div>

        </div>

    </div>
  )
}

export default Cards
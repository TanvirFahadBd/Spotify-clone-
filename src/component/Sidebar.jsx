import React from 'react'
import { assets } from "../assets/assets";
const Sidebar = () => {
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around '>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.home_icon} />
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.search_icon} />
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-[#121212] h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className=' flex items-center gap-3'>
                        <img className='w-6' src={assets.stack_icon} />
                        <p>Your Library</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <img className='w-5' src={assets.arrow_icon} alt="" />
                        <img className='w-5' src={assets.plus_icon} alt="" />
                    </div>
                </div>
                <div className='m-2 flex flex-col items-start justify-start gap-4 rounded-lg bg-[#242424] p-4 font-semibold'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-white'>Create your first playlist</h1>
                        <p className='text-sm font-normal text-gray-300'>It's easy, we'll help you</p>
                    </div>
                    <button className=' mt-4 cursor-pointer rounded-full bg-white px-4 py-1.5 text-[14px] font-bold text-black transition-transform hover:scale-105 active:scale-95'>
                        Create playlist
                    </button>
                </div>
                <div className='m-2 flex flex-col items-start justify-start gap-4 rounded-lg bg-[#242424] p-4 font-semibold'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-white'>
                            Let's Find some podcasts to follow
                        </h1>
                        <p className='text-sm font-normal text-gray-300'>
                            We will keep you on updat
                        </p>
                    </div>
                    <button className=' mt-4 cursor-pointer rounded-full bg-white px-4 py-1.5 text-[14px] font-bold text-black transition-transform hover:scale-105 active:scale-95'>
                        Brows Podcasts
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
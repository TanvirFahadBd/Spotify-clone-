import React from 'react'
import { assets, songsData } from "../assets/assets"

const Plyer = () => {
    return (
        <div className='h=[10%]  flex justify-between items-center text-white p-4 bg-[#663399]'>
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src={songsData[0].image} alt="" />
                <div>
                    <p>{songsData[0].name}</p>
                    <p>{songsData[0].desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />

                </div>
                <div className='flex items-center gap-5 '>
                    <p>0:42</p>
                    <div className='w-[60vw] .max-w-[500px] bg-gray-300 cursor-pointer'>
                        <hr className='h-1 w-[10%] border-none bg-green-800 rounded-full ' />
                    </div>
                    <p>3:42</p>
                </div>
            </div>
            <div className='hidden lg:flex items-center gap-2 opasity-75'>
                <img className='w-4' src={assets.play_icon} alt="" />
                <img className='w-4' src={assets.mic_icon} alt="" />
                <img className='w-4' src={assets.queue_icon} alt="" />
                <img className='w-4' src={assets.speaker_icon} alt="" />
                <img className='w-4' src={assets.volume_icon} alt="" />
                <div className='w-20 bg-white h-1'></div>
                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img className='w-4' src={assets.zoom_icon} alt="" />

            </div>
        </div>
    )
}

export default Plyer
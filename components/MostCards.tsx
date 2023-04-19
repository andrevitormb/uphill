import React from 'react'
import Image from 'next/image'
import {BsPerson} from 'react-icons/bs'
import {MdStars} from 'react-icons/md'

const MostCards = () => {
  return (
    <div className='grid grid-cols-3 text-black gap-4'>
      <div className="bg-white shadow-lg flex-col group relative rounded-md cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-80 w-80 flex flex-col items-center">
          <div className='w-full h-20 bg-red-200 absolute z-0 bg-[url("/me.jpg")] bg-cover '>
          </div>
          <div className='z-10 mt-5 rounded-full overflow-hidden object-cover transition-transform duration-500 group-hover:scale-125 '>
            <Image src={'/me.jpg'}
             height={80} width={80} alt='' className=''/>
          </div>
          <div className='pt-2 text-center text-[#2e3a53]'>
            <h2 className='font-semibold'>Andre Macedo</h2>
            <p className=''>andrevitoreur@gmail.com</p>
          </div>
          <div className='text-[#2e3a53] flex justify-center items-center gap-1 pt-2'>
            <BsPerson className='w-5 h-5 justify-center'/> 
            <span className='text-xs font-semibold'>380</span> 
            <p className='text-xs opacity-80'>Followers</p>
          </div>
          <hr className='h-1 w-3/4 border-zinc-300 my-3' />
          <div className='w-[70%] flex-col p-2 border-blue-800 border-l-4 border-2 rounded-lg mt-1'>
            <div className='flex text-blue-800 justify-between '>
            <h2 className='text-sm font-semibold '>Hello World</h2>
              <div className='flex flex-row '>
                <MdStars className='w-5 h-5 pt-0.5'/>
                <p className='ml-1 text-sm font-semibold'>54</p>
              </div>
            </div>
            <p className='text-sm pt-2'>
              This is my hello world project
            </p>
          </div> 
        </div>
       
      </div>
      <div>
        card 2
      </div>
      <div>
        card 3
      </div>

    </div>
    
  )
}

export default MostCards
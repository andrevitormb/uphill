import React from 'react'
import Image from 'next/image'
import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
  return (
    <div className='flex flex-row gap-2 bg-[#2e3a53] h-30 left-0 p-4 justify-between'>
        <Image src={'./transferir.svg'} height={200 } width={200} alt=''/>
        <div className='h-10 w-[50vw] bg-zinc-200 rounded-full flex mr-20'>
            <div className='class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"'>
                <AiOutlineSearch aria-hidden="true" className='text-[#2e3a53] w-6 h-6'/>
            </div>
            <input type="search" id="default-search" className=" outline-none border-none overflow-hidden rounded-full pl-3 bg-zinc-200 w-full text-sm text-gray-900 " placeholder="Search" required />
        </div>
        
    </div>
  )
}

export default Search
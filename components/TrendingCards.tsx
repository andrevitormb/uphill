import React from 'react'
import Image from 'next/image'
import {BsPerson} from 'react-icons/bs'
import {MdStars} from 'react-icons/md'
import { useTrendingUsers } from '@/hook/trendingUsers'

const TrendingCards: React.FC = () => {
  const userDetails = useTrendingUsers();
  
  return (
    
    
    <div>
      <h2 className="text-[#2e3a53] items-start font-bold text-2xl py-8">Trending Users</h2>
      <div className='grid grid-cols-3 text-black gap-4'>
      {userDetails.map((user, index) => (
         <div key={index} className="bg-white shadow-lg flex-col group relative rounded-md cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
         <div className="h-80 w-80 group flex flex-col items-center">
           {/* Film - Background and Content */}
           <div className='w-full h-full absolute z-10'> 
             <div className='absolute bg-black/40 w-full h-full'></div>
             <div className='w-full h-full'>
               <img src={user.avatar_url} alt='' className='w-full h-full'/>
             </div>
           </div>
           <div className='text-zinc-200 w-full h-full z-20 absolute'>
              <div className='text-center mt-28 '>
                 <h2 className='font-semibold text-lg'>{user.name}</h2>
               </div>
               <div className='text-zinc-200 leading-snug flex justify-center items-center gap-1 py-1'>
                 <BsPerson className='w-5 h-5 justify-center'/> 
               </div>
               <div className='text-zinc-200 flex justify-center items-center pt-10'>
                 <button className='w-[50%] border rounded-3xl p-2 hover:shadow hover:scale-105 duration-700'>Open Profile</button>
               </div>
           </div>
           {/* END:Film - Background and Content */}
           {/* HERO */}
           <div className='z-40 items-center rounded-full m-0 object-cover pt-5'>
               <img src={user.avatar_url}
               height={80} width={80} alt='' className='m-auto rounded-full'/>
           </div>
           {/* END:HERO */}
           {/* Content Front */}
           <div className='z-30 flex-col items-center w-full translate-y-[-12%] group-hover:translate-y-[90%] duration-500 '>
             <div className='box-border m-0 flex flex-col gap-1 bg-white pb-9'>
             <div className='text-center text-[#2e3a53] bg-white pt-10'>
               <h2 className='font-semibold text-lg'>{user.name}</h2>
               <p className='text-sm'>{user.email === null ? 'Dont have Email' : user.email}</p>
             </div>
               
             <div className='text-[#2e3a53] flex justify-center items-center bg-white gap-1'>
               <BsPerson className='w-5 h-5 justify-center'/> 
               <span className='text-xs font-semibold'>{user.followers}</span> 
               <p className='text-xs opacity-80'>Followers </p>
             </div>
 
             <div className='bg-white'>
               <hr className='h-1 w-3/4 border-zinc-300 my-3 bg-white m-auto' />
             </div>
 
             <div className='bg-white flex '>
               <div className='w-[70%] flex-col p-2 border-blue-800 border-l-4 border-2 bg-white m-auto rounded-lg'>
                 <div className='flex text-blue-800 justify-between '>
                   <h2 className='text-sm font-semibold '>{user.topStarRepo?.name}</h2>
                     <div className='flex flex-row '>
                       <MdStars className='w-5 h-5 pt-0.5'/>
                       <p className='ml-1 text-sm font-semibold'>{user.topStarRepo?.stargazers_count}</p>
                     </div>
                   </div>
                   <p className='text-sm pt-2 truncate-2-lines'>
                   {user.topStarRepo?.description}
                   </p>
                 </div>
               </div>
            </div>
             </div>
             
           {/* Content Front */}
         </div>
       </div>
      ))}
     
     
     
      </div>
    </div>
    
  )
}

export default TrendingCards
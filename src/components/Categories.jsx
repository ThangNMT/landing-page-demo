import React from 'react'
import CategoryCard from './CategoryCard'
import {BsVectorPen} from 'react-icons/bs'
import {TiHtml5} from 'react-icons/ti'
import {TbMicrophone2,TbMusic} from 'react-icons/tb'
import {HiOutlineBriefcase} from 'react-icons/hi'
import {WiSunrise} from 'react-icons/wi'
import {AiOutlineCamera} from 'react-icons/ai'
import {BiData} from 'react-icons/bi'
import {MdAttachMoney} from 'react-icons/md'
import {FaUniversity} from 'react-icons/fa'

const Categories = () => {
  return (
    <div className='w-full bg-[#a6d7ff] py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Most <span className='text-[#2b4a8b]'>Most Categories</span></h1>
                <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, adipisci!</p>
                
                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1'>
                    <CategoryCard icons={<BsVectorPen size={30} />} title={'Design'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Development'} />
                    <CategoryCard icons={<TbMicrophone2 size={30} />} title={'Marketing'} />
                    <CategoryCard icons={<HiOutlineBriefcase size={30} />} title={'Business'} />

                    <CategoryCard icons={<BsVectorPen size={30} />} title={'Design'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Development'} />
                    <CategoryCard icons={<TbMicrophone2 size={30} />} title={'Marketing'} />
                    <CategoryCard icons={<HiOutlineBriefcase size={30} />} title={'Business'} />
                    
                    <CategoryCard icons={<BsVectorPen size={30} />} title={'Design'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Development'} />
                    <CategoryCard icons={<TbMicrophone2 size={30} />} title={'Marketing'} />
                    <CategoryCard icons={<HiOutlineBriefcase size={30} />} title={'Business'} />


                    

                </div>
        
        
        </div>
    </div>
  )
}

export default Categories
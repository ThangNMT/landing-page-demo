import React from 'react';
import { heroImg } from '../assets';
import  {AiOutlineSearch} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#2b4a8b] font-medium'>Lorem, ipsum dolor.</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Access To <span className='text-[#2b4a8b]'>3000+</span> Courses
                    from <span  className='text-[#2b4a8b]'>300</span> Teachers
                    & Institutions
                </h1>
                <p className='py-2 text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo reprehenderit commodi nihil, earum repellendus accusantium quisquam aut vero eveniet fugit sunt in tempore quia magnam minus id sint? Beatae, officia.</p>
                
                <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
                    <input 
                        className='bg-white'
                        type="text"
                        placeholder='What do want to learn?'
                    />
                    <button>
                        <AiOutlineSearch 
                            size={20}
                            className="icon"
                            style={{color:'#000'}}

                        />

                    </button>
                </form>
            </div>
            
            <img  src={heroImg} className="md:order-last  order-first" />



        </div>
        

    </div>
  )
}

export default Hero
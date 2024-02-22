import React from 'react'
import { avatar, quotationMark } from '../assets'

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-2xl shadow-xl my-8 mx-8'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
                <img src={avatar} />
                <div>
                    <h1>Nguyen Minh</h1>
                    <p>FE Devs</p>
                </div>
            
            </div>
      </div>

      <div className='py-8'>
        <h3 className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum exercitationem praesentium, illo tenetur saepe quia voluptas dicta reiciendis quaerat culpa quod nesciunt delectus ullam explicabo doloribus ducimus ipsam quidem rem!</h3>
      </div>
    </div>
  )
}

export default FeedbackCard
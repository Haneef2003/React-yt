import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between '>
          <h2 className='h-12 w-12 bg-white rounded-full flex justify-center font-semibold text-xl items-center'>{props.id+1}</h2>
        <div >
            <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sequi atque fugit deleniti eius quibusdam.</p>
            <div className='flex justify-between'>
               <button style={{backgroundColor:props.color}} className='px-8 py-2 text-white rounded-full text-lg font-medium'>{props.tag} </button>
               <button style={{backgroundColor:props.color}} className=' px-3 py-2  text-white rounded-full text-lg font-medium'><i class="ri-arrow-right-line"></i></button>
        
            </div>
          </div> 
         
      </div>
    </div>
  )
}

export default RightCardContent

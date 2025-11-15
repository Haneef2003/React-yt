import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full flex  flex-nowrap overflow-x-auto gap-10  w-2/3 p-6 '>
    {props.users.map(function(elem,idx){
      return <RightCard key={idx} color={elem.color} id={idx} img={elem.img}  tag={elem.tag}/>
    })}
        
    </div>
  )
}

export default Rightcontent

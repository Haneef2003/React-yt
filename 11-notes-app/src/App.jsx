import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler=(e)=>{
    e.preventDefault()
   const copyTask=[...task];
   copyTask.push({title,details})
    setTask(copyTask)
    console.log(task);
    
    setTitle('')
    setDetails('')
  }

  const deleteNote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  return (
    <div className='min-h-screen bg-black lg:flex text-white'>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }} className='flex items-start gap-5 flex-col lg:w-1/2  p-10'>
      <h1 className='font-bold text-3xl'>Add Notes</h1>
      {/* Heading ka input */}
      <input 
        type="text" 
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded' 
        placeholder='Enter Notes Heading' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
      />
      {/* details ka input */}
      <textarea 
        className='px-5 w-full font-medium h-32 border-2 outline-none rounded' 
        placeholder='Write Details' 
        name="" 
        id=""
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
     />
      <button className='border-2 active:scale-95 font-medium outline-none w-full px-5 py-2 bg-white text-black rounded'>Add Notes</button>
      
        </form>
      <div className=' lg:border-l-2  lg:w-1/2 p-2 ml-0'>
          <h1 className='font-bold text-4xl '>Recents Notes</h1>
          <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto '>
            {task.map(function(elem,idx){
              return  <div key={idx} className="h-52 w-40 flex flex-col justify-between relative pt-8.5 pb-4 px-4 bg-cover rounded-xl text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                 <div>
                    <h3 className='font-bold leading-tight text-xl wrap-break-word'>{elem.title}</h3>
              <p className='mt-4 text-xs font-medium leading-tight text-gray-500 overflow-hidden wrap-break-word'>{elem.details}</p>
                 </div>
                 <button onClick={()=>{
                  deleteNote(idx)
                 }} className='bg-red-300 rounded py-1 cursor-pointer text-xs w-full font-bold text-white active:scale-95'>Delete</button>
              </div> 
            })}
            
             
          </div>
      </div>
    </div>
  )
}

export default App

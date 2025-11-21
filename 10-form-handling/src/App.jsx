import  { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('');

  const clicked=(a)=>{
    a.preventDefault();
    console.log('Form Submitted by',title);
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(a)=>{
        clicked(a)
      }}>
        <input 
        type="text" 
        placeholder='Enter Your Name' 
        value={title} 
        onChange={(e)=>{
          settitle(e.target.value)
      }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

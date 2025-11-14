import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card 
      user='Emilia Clark'
      img="https://images.unsplash.com/photo-1762571944746-de332cab1e57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Nnx8fGVufDB8fHx8fA%3D%3D"
      discription='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
      
      />
      <Card
      user='David Warner'
      img='https://images.unsplash.com/photo-1762368229295-81f2742fb8a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D'
      discription='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
      />
     
    </div>
  )
}

export default App

import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users=[
    {
      
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Satisfied',
      color:'royalblue',
    },
    {
      
      img:'https://plus.unsplash.com/premium_photo-1661517276036-c31074397504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwNXx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Underserved',
      color:'lightseagreen',
    },
    {
     
      img:'https://plus.unsplash.com/premium_photo-1661454349706-3ccb54124faa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8',
      intro:'',
      tag:'Underbanked',
      color:'pink',
    },
      {
      
      img:'https://images.unsplash.com/photo-1759903553693-844710c7b898?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8',
      intro:'',
      tag:'Satisfied',
      color:'lightblue',
    },
      {
      
      img:'https://plus.unsplash.com/premium_photo-1661641829400-3d9c157f97b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
      intro:'',
      tag:'Satisfied',
      color:'gray',
    }
  ]
  return (
    <div >
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App

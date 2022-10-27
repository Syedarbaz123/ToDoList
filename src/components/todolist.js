import { padding } from '@mui/system';
import React from 'react'


const  Todolist=(props)=>{

  return (
      <ul style={{
        padding:'0px'
      }}>
      <button 
        onClick={()=>props.onSelect(props.id)}
        style={{
            background:'red',
            color:'white',
            borderRadius:'100%',
            border:'0px',
            width:'25px',
            margin: '0px 0px 0px 290px'   
            }}>X</button>
       
        <li style={{
              listStyleType:'none',
              margin: '-30px 330px 0px 0px',
              fontWeight: '500',
              fontSize:'23px',
              textTransform:'capitalize'
            }}>{props.text}</li>
            <hr/>
    </ul>
  )
}
export default Todolist;
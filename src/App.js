import * as React from 'react'
import { useState } from 'react'
import './App.css';
import Todolist from './components/todolist';

export default function App() {
  const [inputlist,setInputlist] =useState("");
  const [items,setItems]=useState([]);
  
  const inputvalu = (event)=>{
    setInputlist(event.target.value)
   
  }
  const additem = ()=>{
    setItems((olditems)=>{
      return[...olditems, inputlist]
    })
    setInputlist("")
    // setItems("");
  }
  const deleteitems = (id)=>{
    alert(`Are You Sure `)
    

    return(
      setItems((olditems)=>{
        return olditems.filter((arrelem, index)=>{
          return(
            index !==id
          )})
        })
    );
  };  
  return (
    <div className="App">
     <h1>ToDo List</h1>
     <br />
     <br />
     <div className="input-div">
      <input type='text' placeholder='Add Item...' value={inputlist} onChange={inputvalu} 
      className="inpt" 
      />
      <button type="button" onClick={additem} class="btn btn-success">+</button>
      
      </div>
        {items.map((itemval,index)=>{
          return(
            <Todolist
            key={index}
            id={index}
            text={itemval}
            onSelect={deleteitems}
            />
            )
          })}           
     </div>
  );
}
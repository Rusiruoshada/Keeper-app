import React, { useState } from "react";
import Note from './Note';

function CreateArea() {

  const [inputValue , setInputValue] = useState({
    title: "",
    content: ""
  })
  const [addValue, setAddValue] = useState([])  

const handleChange =(event) => {
  const {value , name } = event.target;
  setInputValue(pervValue => {
    if(name === 'title') {
      return{ title: value,
              content: pervValue.content}
    }
    else if(name === 'content') {
      return {
        title: pervValue.title,
        content: value
      }
    }
  })
}


  const addItem = () =>
  {
    setAddValue(pervValue => {
      return [...pervValue , inputValue]
    })
    setInputValue({title:'', content: ''})
  }

const formSubmit = (event) => {

  event.preventDefault();
}

const deleteItem =(index) =>{
  setAddValue(pervValue => {
    return pervValue.filter((item , i ) => i !== index)  
  })
}

  return (
    <div className="inputFelid">
      <form onSubmit={formSubmit}>
        <input onChange= {handleChange} value={inputValue.title} name="title" placeholder="Title" />
        <textarea onChange= {handleChange} value={inputValue.content} name="content" placeholder="Take a note..." rows="3" />
        <button  className="btn btnAdd" onClick={addItem} >+</button>
      </form>
      {addValue.map((item, index) => {
        return <Note key={index} deleteItem={() => deleteItem(index)} title= {item.title} content={item.content}/>
      })}
    </div>
  );
}

export default CreateArea;

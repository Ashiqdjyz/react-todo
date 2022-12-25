import React,{useState} from 'react';
import './App.css';
import './style.css'

function App() {
  const [todo,setTodo] = useState("")
  const [todos,setTodos] = useState([])
 
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(event)=>{setTodo(event.target.value)}} type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={()=>{
          setTodos([...todos,{text:todo,id:Date.now(),status:false}])
          console.log("itemadded")}}></i>
      </div>
      {todos.map((obj,index)=>{
        return(
      <div key={index} className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" onClick={()=>{setTodos(todos.filter((obj2)=>{
              if(obj2.id===obj.id){
                obj.checked = !obj.status;
                obj.status = obj.checked
              }
              return obj2
            }))}} name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times" onClick={()=>{
              setTodos(todos.filter(obj4=>obj4.id!==obj.id))
            }} ></i>
          </div>
        </div>
       

      </div>

        )
      })}
    </div>

     

  );
}

export default App;
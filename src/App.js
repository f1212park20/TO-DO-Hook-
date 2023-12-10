import React, {useState} from 'react';
import "./App.css"
import List from './Compoents/List';
import Form from './Compoents/Form';



export default function App() {

  
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  // 전체 삭제
  const handRemoveClick = () =>{
      setTodoData([]);
  }

  
    return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
            <div className="flex justify-between mb-3">
                <h1>할 일 목록</h1>
                <button onClick={handRemoveClick}>Delete All</button>                 
            </div>
            <List todoData={todoData} setTodoData={setTodoData} value={value} />

            <Form  setTodoData={setTodoData} value={value} setValue={setValue}/>
        </div>
    </div>
    );
  
}




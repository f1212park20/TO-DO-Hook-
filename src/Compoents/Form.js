import React from 'react'

export default function Form({ setTodoData, value, setValue}) {
  console.log("Form Comprnt")
  // 검색어 입력 창
  const handChanage = (e) =>{
    // e.target.value -> 검색어 데이터 출력
    setValue(e.target.value);
    
    
  }

  const handleSubmit = (e) =>{
    // 페이지 리로드 방지
    e.preventDefault();

    // 새로운 할일 데이터 
    let newTodo={
      id:Date.now(),
      title:value,
      completed:false,
    }

    // 원래 있던 할일에 새로운 할 일 더해 주기 
    setTodoData(prev => [...prev, newTodo])
    setValue("")
  }
    
  return (
    <div>
        <form  onSubmit={handleSubmit} className="flex pt-2">
                     <input
                      type='text'
                      name='value'
                      className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
                      value={value}
                      onChange={handChanage}
                     />
                     <input
                        type="submit"
                        className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
                        value="입력"                        
                     />
                      
        </form>
    </div>
  )
}

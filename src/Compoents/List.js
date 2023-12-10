import React,{useCallback, useState} from 'react'
 
const List = ({todoData, setTodoData, value}) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState("");

  // 선택 후 줄긋기
  const handleCompleteChane = (id) =>{
    console.log("List Comprnt")
    let newTodoData=todoData.map(data=>{
      if(data.id === id){
        // true -> false
        data.completed = !data.completed;

      }
      return data;
    })
    setTodoData(newTodoData)

  }

  const handleClick = useCallback( (id) =>{
    
      let newtodoData=todoData.filter((data) => data.id !==id);
      setTodoData(newtodoData);
      
    },
    [todoData]
  );

  // 수정 버튼 
  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    // 여기에서 수정된 텍스트를 처리하고 저장 로직을 추가하세요.
    console.log('Saved:', editedText);
    
    // 저장 후 편집 모드 종료
    setEditing(false);
  };

  const handleCancel = () => {
    // 취소 시 편집 모드 종료
    setEditing(false);
    // 수정된 내용 초기화
    setEditedText("");
  };

  const handleChange = (event) => {
    // 입력 필드의 변경 사항을 반영
    setEditedText(event.target.value);
  };

  if(editedText.length > 0){
    value=editedText
    
    return (
      
      <div>
      {todoData.map((data)=>(
            <div   Key={data.id}>
              <div className={" flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded"}>
              
                <div className="items-center">
                  <input type='checkbox' defaultChecked={false}  onChange={()=> handleCompleteChane(data.id)}/>
                  <span className={data.completed ? "line-through" : undefined}>{value}</span>
                </div> 

                
                <div>
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={editedText}
                        onChange={handleChange}
                      />
                      <br/>
                      <button onClick={handleSave}>save</button>
                      &nbsp;
                      <button onClick={handleCancel}>Cancel</button>
                    </>
                  ) : (
                    <>
                     
                      
                    </>
                  )}
              </div>
                
                <div className="items-center">
                  <button onClick={handleEdit}>Edit</button>                              
                  <button className="float-right px-4 py-2" onClick={() => handleClick(data.id)}>x</button>
                </div>
             
              </div>
              
            </div>  
          ))}
      </div>
    )
  }else{
    return (
      
      <div>
      {todoData.map((data)=>(
            <div   Key={data.id}>
              <div className={" flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded"}>
              
                <div className="items-center">
                  <input type='checkbox' defaultChecked={false}  onChange={()=> handleCompleteChane(data.id)}/>
                  <span className={data.completed ? "line-through" : undefined}>{data.title}</span>
                </div> 


                <div>
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={editedText}
                        onChange={handleChange}
                      />
                      <br/>
                      <button onClick={handleSave}>save</button>
                      &nbsp;
                      <button onClick={handleCancel}>Cancel</button>
                    </>
                  ) : (
                    <>
                      
                    </>
                  )}
              </div>
                
                <div className="items-center">
                  <button onClick={handleEdit} >Edit</button>
                  &nbsp;                              
                  <button className="float-right px-4 py-2" onClick={() => handleClick(data.id)}>x</button>
                </div>
             
              </div>
              
            </div>  
          ))}
      </div>
    )
  }

  
}

export default List


  
    
    
  
  
  


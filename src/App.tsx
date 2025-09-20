import { useEffect, useState } from "react";

function App() {

  const[name,setName] = useState<string>("");
  const[nickname,setNickname] =useState<string>("");

  useEffect(()=>{
    console.log("컴포넌트가 렌더링 될 때마다 특정 작업을 수행합니다");
    console.log("name: ",name);
    console.log("nickname",nickname);
  })

   const onchangeName = (event : React.ChangeEvent<HTMLInputElement>)=>setName(event.target.value);


   const onchangeNickName = (event : React.ChangeEvent<HTMLInputElement>)=>setNickname(event.target.value);
   

  return <div>
    <input type="text" value={name} onChange={onchangeName}/>
    <input type="text" value={nickname} onChange={onchangeNickName}/>
    <div>
      <b>이름 : {name}</b>
      <b>별명 : {nickname}</b>
    </div>
  </div>;
}

export default App

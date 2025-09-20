import { useEffect, useState } from "react";

function App() {

  //useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 훅(Hook)입니다.


  const[name,setName] = useState<string>("");
  const[nickname,setNickname] =useState<string>("");

  useEffect(()=>{
    // 해당 컴포넌트가 최초 렌덩링이 될 때 , useEffect가 실행이 되고,
    //우리가 선언한 state 즉, 상태값이 변화되더라도 useEffect가 실행되는 것을 보아
    //state 즉 , 상태 값이 변화되며 해당 컴포넌트는 재렌더링이 된다라는것을 알수가 있습니다.
    console.log("컴포넌트가 렌더링 될 때마다 특정 작업을 수행합니다");
    console.log("name: ",name);
    console.log("nickname",nickname);
  })

    useEffect(()=>{
    console.log("마운트가 될때만 수행합니다. - 최초 1회 실시");
    console.log("name: ",name);
    console.log("nickname",nickname);
  },[])
    useEffect(()=>{
    console.log("name이라는 상태값이 변할 경우에만 수행합니다.");
    console.log("name: ",name);
    console.log("nickname",nickname);
  },[name])


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

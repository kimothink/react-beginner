import { useEffect, useState } from "react";

function Timer(){
  const [count,setCount] = useState<number>(0);
  
  useEffect(()=>{
    const id =setInterval(()=>{
      console.log("Interval 실행됨");
      setCount((c)=>c+1);
    },1000);

    return()=>{
      console.log(" cleanup: 이전 타이머 제거됨");
      clearInterval(id);
    }
  },[]);
  return <div>카운트 : {count}</div>
}

export default function App(){
 const [visible,setVisible] = useState<boolean>(true);

 return (
  <div>
    {visible&&<Timer/>}
    <button onClick={()=>setVisible(!visible)}>{visible?"숨기기" :"보이기"}</button>
  </div>
 )

}

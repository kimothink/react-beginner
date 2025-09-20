import { useState } from "react";
const getAverage = (numbers: number[]) => {
    console.log("평균 값을 계산 중입니다.");

    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((acc, cur) => acc + cur);
    return sum / numbers.length;
};

function App(){
    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState<string>("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value);
    };
    const onInsert = (event: React.MouseEvent<HTMLButtonElement>) => {
        const nextList = list.concat(parseInt(number));
        setList(nextList); // number[]
        setNumber(""); // number 상태 값 초기화
    };

    return (
        <div>
            <input type="text" value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((value: number, index: number) => {
                    return <li key={index}>{value}</li>;
                })}
            </ul>

            <div>
                <b>평균 값: {getAverage(list)}</b>
            </div>
        </div>
    );

}

export default App
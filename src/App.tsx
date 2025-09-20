import { useCallback, useMemo, useState } from "react";

const getAverage = (numbers: number[]) => {
    console.log("평균 값을 계산 중입니다.");

    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((acc, cur) => acc + cur);
    return sum / numbers.length;
};

function App(){
    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState<string>("");

 const onChange = useCallback((event: React.  ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value);
    }, []); // 컴포넌트가 처음 렌더링 될 때만 함수를 생성한다.

    const onInsert = useCallback(() => {
        const newList = list.concat(parseInt(number));
        setList(newList); // number[]
        setNumber(""); // number 상태 값 초기화
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);
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
                <b>평균 값: {avg}</b>
            </div>
        </div>
    );
}

export default App
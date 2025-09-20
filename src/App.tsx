import { useRef } from "react";

function App() {
    const inputElement = useRef<HTMLInputElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        // useRef 동작
        inputElement.current?.focus();
        fileInputRef.current?.click();
    };

    return (
        <div>
            <input type="text" ref={inputElement} />
            <input type="file" ref={fileInputRef} />
            <button onClick={handleClick}>등록</button>
        </div>
    );
}

export default App;
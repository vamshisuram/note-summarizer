import { useState } from "react";
import "./App.css";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const response = await fetch("http://localhost:3000/api/summarizer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: inputValue,
            }),
        });

        const res = await response.json();
        setOutputValue(res.data, null, 2);
        setLoading(false);
    };

    return (
        <div className="App">
            <h1>Note Summarizer</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter long text..."
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <p>{loading && <span>Loading...</span>}</p>
            <p>{outputValue && <span>{outputValue}</span>}</p>
        </div>
    );
}

export default App;

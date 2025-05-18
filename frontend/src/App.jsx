import { useState } from "react";
import "./App.css";

function App() {
    // simple form input submit handler using useState
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submitted:", inputValue);

        // response handling from LM Studio - LLM model
        const response = await fetch(
            "http://localhost:1234/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: "user",
                            content: `You are a helpful assistant. Answer this query: "${inputValue}"`,
                        },
                    ],
                }),
            }
        );
        const data = await response.json();
        const val = data.choices[0].message.content;
        console.log("LLM response:", val);
        setInputValue("");
        setOutputValue(val);
    };

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={handleSubmit}>
                    <div>
                        <textarea
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Type something..."
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </header>
            <p>{outputValue && <span>LLM response: {outputValue}</span>}</p>
        </div>
    );
}

export default App;

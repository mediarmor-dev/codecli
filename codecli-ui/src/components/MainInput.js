import React, { useState } from "react";
import styles from "./MainInput.module.css";

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

function MainInput() {
    const [input, setInput] = useState("");
    const [arrowEnabled, setArrowEnabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput(value);
        setArrowEnabled(value.trim().length > 0);
    };

    const handleGo = async () => {
        if (!input.trim()) return;
        setLoading(true);
        setResponse("");
        setError("");
        try {
            const res = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: [{ role: "user", content: input }],
                }),
            });
            if (!res.ok) {
                throw new Error("API Error: " + res.status);
            }
            const data = await res.json();
            setResponse(data.choices?.[0]?.message?.content || "No response.");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && arrowEnabled && !loading) {
            handleGo();
        }
    };

    return (
        <div className={styles.inputBoxContainer}>
            <div className={styles.inputBox}>
                <input
                    className={styles.textInput}
                    type="text"
                    placeholder="How can I help you today ?"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    disabled={loading}
                    aria-label="Ask codecli"
                />
                <button
                    className={
                        arrowEnabled
                            ? styles.arrowButtonEnabled
                            : styles.arrowButtonDisabled
                    }
                    onClick={handleGo}
                    disabled={!arrowEnabled || loading}
                    aria-label="Send"
                >
                    <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill={arrowEnabled ? "#1db954" : "#bdbdbd"}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" />
                    </svg>
                </button>
            </div>
            {loading && <div className={styles.loading}>Searching...</div>}
            {response && (
                <div className={styles.response}>
                    <strong>Answer:</strong> {response}
                </div>
            )}
            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
}

export default MainInput;

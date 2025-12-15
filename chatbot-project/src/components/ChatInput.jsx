import  { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({ chatMessage, setChatMessages }) {
    const [inputText, setInputText] = useState('');

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    function sendMessage() {
        const newChatMessage = [
            ...chatMessage,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }
        ]

        setChatMessages(newChatMessage);

        const response = Chatbot.getResponse(inputText)

        setChatMessages([
            ...newChatMessage,
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);

        setInputText(''); // по желание – да чисти полето
    }

    return (
        <div className="chat-input-container">
            <input
                className="chat-input"
                placeholder="Send a message to Chatbot"
                size="25"
                value={inputText}
                onChange={saveInputText}
            />

            <button onClick={sendMessage} className="send-btn">Send</button>
        </div>
    );
}

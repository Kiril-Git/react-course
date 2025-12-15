import  { useState, useEffect } from 'react'
import './App.css'
import dayjs from 'dayjs';
import { ChatInput } from "./components/ChatInput.jsx";
import ChatMessages from "./components/ChatMessages.jsx";


function App() {
    const [chatMessage, setChatMessages] = useState([
        { message: 'Hello Chatbot!', sender: 'user',   id: 'id1' },
        { message: 'Hello! how can I help you?', sender: 'robot', id: 'id2' },
        { message: 'Can you get me the date?', sender: 'user',    id: 'id3' },
        { message: 'Have a look at the top of this chat.', sender: 'robot', id: 'id4' }
    ]);

    // състояние за часовника
    const [now, setNow] = useState(dayjs());

    useEffect(() => {
        const id = setInterval(() => {
            setNow(dayjs());
        }, 1000);

        return () => clearInterval(id);
    }, []);

    const date = now.format('YYYY-MM-DD');
    const time = now.format('HH:mm:ss');

    return (
        <div className="app-container">
            <p>Date: {date}</p>
            <p>Time: {time}</p>

            <ChatMessages chatMessage={chatMessage} />

            <ChatInput
                chatMessage={chatMessage}
                setChatMessages={setChatMessages}
            />
        </div>
    );
}

export default App

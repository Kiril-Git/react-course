import {useEffect, useRef} from "react";
import { ChatMessage } from "./ChatMessage.jsx";
import './ChatMessages.css'


function ChatMessages({ chatMessage }) {
    const chatMessagesRef = useRef(null)

    useEffect(() => {
        const containerEl = chatMessagesRef.current
        if (containerEl) {
            containerEl.scrollTop = containerEl.scrollHeight;
        }
    }, [chatMessage]);

    return (
        <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessage.map((m) => (
                <ChatMessage
                    key={m.id}
                    message={m.message}
                    sender={m.sender}
                />
            ))}
        </div>
    );
}

export default ChatMessages;
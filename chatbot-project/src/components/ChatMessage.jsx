import RobotProfileImg from "../assets/robot.png";
import UserProfileImg from "../assets/user.png";
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
    return (
        <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
            {sender === 'robot' && (
                <img className="chat-message-profile" src={RobotProfileImg} />
            )}
            <div className="chat-message-text">
                {message}
            </div>
            {sender === 'user' && (
                <img className="chat-message-profile" src={UserProfileImg} />
            )}
        </div>
    );
}


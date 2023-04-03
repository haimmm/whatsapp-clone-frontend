import { useSocketContext } from "../../../context/SocketProvider";
import MessageBubble from "../MessageBubble/MessageBubble";
import "./MainChat.css";

export default function MainChat(): JSX.Element {
  const { messages } = useSocketContext();

  return (
    <ul className="main-chat-container">
      {messages.map((data) => (
        <MessageBubble key={data.id} message={data} />
      ))}
    </ul>
  );
}

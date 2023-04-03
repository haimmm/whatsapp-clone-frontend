import "./MessageBubble.css";
import { MessageType } from "../../../context/SocketProvider";

type propsType = {
  message: MessageType;
};

export default function MessageBubble({ message }: propsType) {
  return (
    <li
      className={
        message.isMyMessage ? "my-message-bubble" : "response-message-bubble"
      }
    >
      {message.content}
    </li>
  );
}

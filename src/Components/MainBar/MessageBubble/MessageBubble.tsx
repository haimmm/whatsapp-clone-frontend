import "./MessageBubble.css";

type propsType = {
  message: string;
};

export default function MessageBubble({ message }: propsType) {
  return <li className="my-message-bubble">{message}</li>;
}

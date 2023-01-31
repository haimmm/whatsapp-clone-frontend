import "./NewChatList.css";
import { ChatNode } from "../ChatNode/ChatNode";
import { getDummyChatNodes } from "../../../__tests__/dummy_data";

export function NewChatList() {
  return (
    <div className="scrollable">
      <ul className="new-chat-list-container">
        {getDummyChatNodes().map((data) => (
          <ChatNode key={data.id} nodeDetails={data} isNewChat={true} />
        ))}
      </ul>
    </div>
  );
}

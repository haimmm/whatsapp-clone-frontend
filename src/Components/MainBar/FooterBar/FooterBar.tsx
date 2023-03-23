import React, { useState } from "react";
import "./FooterBar.css";
import { Panel } from "../../../Layouts/Panel/Panel";
import { ReactComponent as EmojiIcon } from "../../../Assets/images/emojis.svg";
import { ReactComponent as AttachIcon } from "../../../Assets/images/attach-files.svg";
import { ReactComponent as SendMessageIcon } from "../../../Assets/images/sendMessageArrow.svg";
import { ReactComponent as CameraIcon } from "../../../Assets/images/camera.svg";
import { useSocketContext } from "../../../context/SocketProvider";

export default function FooterBar(): JSX.Element {
  const [messageContent, setMessageContent] = useState("");
  const { sendMessage, displayNewMessage } = useSocketContext();

  function handleSendMessage() {
    console.log("send clicked!");
    sendMessage(messageContent);
    displayNewMessage({ content: messageContent });
    setMessageContent("");
  }

  return (
    <Panel justifyContent="space-between" panelHeight={120}>
      <button>
        <EmojiIcon />
      </button>
      <button>
        <AttachIcon />
      </button>
      <div className="message-input">
        <button>
          <CameraIcon />
        </button>
        <input
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          type="text"
          placeholder="Type a message"
        />
      </div>
      <button onClick={handleSendMessage}>
        <SendMessageIcon />
      </button>
    </Panel>
  );
}

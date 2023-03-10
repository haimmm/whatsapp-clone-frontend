import React from "react";
import "./FooterBar.css";
import { Panel } from "../../../Layouts/Panel/Panel";
import { ReactComponent as EmojiIcon } from "../../../Assets/images/emojis.svg";
import { ReactComponent as AttachIcon } from "../../../Assets/images/attach-files.svg";
import { ReactComponent as SendMessageIcon } from "../../../Assets/images/sendMessageArrow.svg";
import MessageInput from "../MessageInput/MessageInput";
export default function FooterBar(): JSX.Element {
  return (
    <Panel justifyContent="space-between" panelHeight={120}>
      <div className="footer-buttons">
        <button>
          <EmojiIcon />
        </button>
        <button>
          <AttachIcon />
        </button>
        <MessageInput />

        <button>
          <SendMessageIcon />
        </button>
      </div>
    </Panel>
  );
}

import { ReactComponent as LeftArrow } from "../../../Assets/images/left-arrow.svg";
import { useSlideContext } from "../../../context/SlideAnimationProvider";
import "./NewChatPanel.css";

export function NewChatPanel() {
  const { toggleSlide } = useSlideContext();

  return (
    <div className="new-chat-panel">
      <button onClick={toggleSlide}>
        <LeftArrow />
      </button>
      <h4>New Chat</h4>
    </div>
  );
}

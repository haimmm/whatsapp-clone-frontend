import { useSlideContext } from "../../../context/SlideAnimationProvider";
import { NewChatList } from "../NewChatList/NewChatList";
import { NewChatPanel } from "../NewChatPanel/NewChatPanel";
import "./NewChatSlide.css";

export function NewChatSlide() {
  const { slideClass } = useSlideContext();
  const sliderClassNames = `new-chat-container ${slideClass}`;

  return (
    <div className={sliderClassNames}>
      <NewChatPanel />
      <NewChatList />
    </div>
  );
}

import { ChatSlide } from "../../Components/SideBar/ChatSlide/ChatSlide";
import { NewChatSlide } from "../../Components/SideBar/NewChatSlide/NewChatSlide";
import { SlideAnimationProvider } from "../../context/SlideAnimationProvider";
import "./SideBar.css";

export function Sidebar() {
  return (
    <aside className="side-container">
      <SlideAnimationProvider>
        <ChatSlide />
        <NewChatSlide />
      </SlideAnimationProvider>
    </aside>
  );
}

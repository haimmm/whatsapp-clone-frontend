import { ChatsList } from "../ChatsList/ChatsList";
import { Search } from "../Search/Search";
import { SidePanel } from "../SidePanel/SidePanel";

export function ChatSlide() {
  return (
    <>
      <SidePanel />
      <Search />
      <ChatsList />
    </>
  );
}

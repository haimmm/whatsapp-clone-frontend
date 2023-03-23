import "./App.css";
import { SocketProvider } from "./context/SocketProvider";
import { Chat } from "./Layouts/Chat/Chat";
import { Sidebar } from "./Layouts/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <SocketProvider>
        <Sidebar />
        <Chat />
      </SocketProvider>
    </div>
  );
}

export default App;

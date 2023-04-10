import { useState } from "react";
import "./App.css";
import SignIn from "./Components/Auth/SignIn/SignIn";
import { SocketProvider } from "./context/SocketProvider";
import { Chat } from "./Layouts/Chat/Chat";
import { Sidebar } from "./Layouts/SideBar/SideBar";
import SignUp from "./Components/Auth/SignUp/SignUp";

export default function App() {
  const user = undefined;
  const [isRegistered, setIsRegistered] = useState<boolean>(true);

  return (
    <div className={user ? "app-container" : "auth-container"}>
      {user ? (
        <SocketProvider>
          <Sidebar />
          <Chat />
        </SocketProvider>
      ) : isRegistered ? (
        <SignIn {...{ setIsRegistered }} />
      ) : (
        <SignUp />
      )}
    </div>
  );
}

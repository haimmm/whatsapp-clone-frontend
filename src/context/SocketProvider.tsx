import React, { useState, useContext } from "react";
import { io } from "socket.io-client";

type PropsType = {
  children: JSX.Element[] | JSX.Element;
};

export type MessageType = {
  content: string;
  isMyMessage: boolean;
  id?: string;
};

type contextType = {
  sendMessage: (message: string) => void;
  displayNewMessage: (message: MessageType) => void;
  messages: MessageType[];
};

const SocketContext = React.createContext<contextType>({
  //default context value
  sendMessage: (message) => "",
  displayNewMessage: (message) => "",
  messages: [],
});

const socket = io("http://localhost:3030");

export function SocketProvider({ children }: PropsType) {
  const [messages, setMessages] = useState<MessageType[]>([
    { content: "test meesage", id: "0", isMyMessage: true },
  ]);

  function displayNewMessage(message: MessageType) {
    if (!message.id) {
      //fake id for instant display
      message.id = crypto.randomUUID() + "temp";
    }
    setMessages([...messages, message]);
  }

  function sendMessage(message: string) {
    socket.emit("send-message", message);
  }

  socket.on("recieve-message", (message: MessageType) => {
    displayNewMessage(message);
  });

  return (
    <SocketContext.Provider
      value={{ sendMessage, messages, displayNewMessage }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export const useSocketContext = () => useContext(SocketContext);

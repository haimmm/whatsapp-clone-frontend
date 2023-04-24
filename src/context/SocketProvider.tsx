import React, { useState, useContext } from "react";
import { io, Socket } from "socket.io-client";
import { serverUrl } from "../utils/chatAPI";

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
  connect: () => void;
};

const SocketContext = React.createContext<contextType | null>(null);

export function SocketProvider({ children }: PropsType) {
  const [messages, setMessages] = useState<MessageType[]>([
    { content: "test meesage", id: "0", isMyMessage: true },
  ]);

  let socket: Socket | undefined = undefined;

  const connect = () => {
    try {
      socket = io(serverUrl);
      console.log("connected to socket succesfully!");

      socket.on("recieve-message", (message: MessageType) => {
        displayNewMessage(message);
      });
    } catch (e) {
      console.log("couldn't connect to socket ", e);
    }
  };

  function displayNewMessage(message: MessageType) {
    if (!message.id) {
      //fake id for instant display
      message.id = crypto.randomUUID() + "temp";
    }
    setMessages([...messages, message]);
  }

  function sendMessage(message: string) {
    socket?.emit("send-message", message);
  }

  return (
    <SocketContext.Provider
      value={{ sendMessage, messages, displayNewMessage, connect }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export const useSocketContext = () => {
  const currentSocketContext = useContext(SocketContext);

  if (!SocketContext) {
    throw new Error(
      "useSocketContext has to be used within <SocketContext.Provider>"
    );
  }

  return currentSocketContext as contextType;
};

//export const useSocketContext = () => useContext(SocketContext);

// {
//   //default context value
//   sendMessage: (message) => "",
//   displayNewMessage: (message) => "",
//   messages: [],
//   connect: () => "",
// }

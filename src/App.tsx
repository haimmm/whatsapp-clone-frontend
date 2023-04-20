import "./App.css";
import { SocketProvider } from "./context/SocketProvider";
import { Chat } from "./Layouts/Chat/Chat";
import { Sidebar } from "./Layouts/SideBar/SideBar";
import AuthForm from "./Components/Auth/AuthForm/AuthForm";
import { useAuthContext } from "./context/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  const { user } = useAuthContext();
  const queryClient = new QueryClient();
  // const { isLoading, isError, data, error } = useQuery({
  //   queryKey: ["auth"],
  // });

  // useEffect(() => {
  //   async function fetchDataAsync() {
  //     try {
  //       const response = await axios.post("http://localhost:3030/auth/login", {
  //         email: "test@test",
  //         password: "Aa123456",
  //       });
  //       console.log(response);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   fetchDataAsync();
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {user ? (
        <div className="app-container">
          <SocketProvider>
            <Sidebar />
            <Chat />
          </SocketProvider>
        </div>
      ) : (
        <AuthForm />
      )}
    </QueryClientProvider>
  );
}

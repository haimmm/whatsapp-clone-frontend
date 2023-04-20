import React, { useState, useContext } from "react";
import api, { SignInFormType, SignUpFormType } from "../utils/chatAPI";
import axios, { AxiosError } from "axios";

type PropsType = {
  children: JSX.Element[] | JSX.Element;
};

export type userType = {
  id: string;
  token: string;
  name: string;
  email: string;
} | null;

type ContextType = {
  user: userType;
  signIn: (p: SignInFormType) => Promise<userType>;
  signUp: (p: SignUpFormType) => Promise<void>;
  signOut: () => void;
};

const AuthContext = React.createContext<ContextType | null>(null);

export function AuthProvider({ children }: PropsType) {
  const [user, setUser] = useState<userType>(null);

  const signIn = async (payload: SignInFormType): Promise<userType> => {
    try {
      console.log("trying to sign in...", api.signIn, payload);
      const response = await axios.post(api.signIn, payload);
      console.log("response: ", response);
      const user: userType = response.data;
      console.log("user signed in: ", user);
      setUser(user);
      return user;
    } catch (e: unknown) {
      throw new Error(
        e instanceof AxiosError ? e.response?.data.error : "unknown error"
      );
    }
  };

  const signUp = async (payload: SignUpFormType) => {
    const user: userType = await axios.post(api.signUp, payload);
    //auto log in after register
    setUser(user);
  };

  const signOut = () => {
    //axios(api.signOut, payload);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const currentAuthContext = useContext(AuthContext);

  if (!currentAuthContext) {
    throw new Error(
      "useAuthContext has to be used within <AuthContext.Provider>"
    );
  }

  return currentAuthContext as ContextType;
};

import React, { useState, useContext } from "react";
import api, { SignInFormType, SignUpFormType } from "../utils/chatAPI";
import { AxiosResponse } from "axios";
import { httpTypes, fetchWrapper } from "../utils/axiosConfig";

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
  signIn: (p: SignInFormType) => Promise<void>;
  signUp: (p: SignUpFormType) => Promise<void>;
  signOut: () => void;
};

const AuthContext = React.createContext<ContextType | null>(null);

export function AuthProvider({ children }: PropsType) {
  const [user, setUser] = useState<userType>(null);

  const signIn = async (payload: SignInFormType) => {
    console.log("trying to sign in...");
    const response: AxiosResponse = (await fetchWrapper(
      httpTypes.POST,
      api.signIn,
      payload
    )) as AxiosResponse;
    const user: userType = response.data;
    setUser(user);
  };

  const signUp = async (payload: SignUpFormType) => {
    console.log("trying to sign up...");
    const response: AxiosResponse = (await fetchWrapper(
      httpTypes.POST,
      api.signUp,
      payload
    )) as AxiosResponse;
    const user: userType = response.data;
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

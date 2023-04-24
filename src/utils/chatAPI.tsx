export type SignInFormType = {
  email: string;
  password: string;
};

export type SignUpFormType = {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
};

export const serverUrl = "http://localhost:3030";

const api = {
  //   /AUTH/*
  signIn: `${serverUrl}/auth/login`,
  signUp: `${serverUrl}/auth/register`,
  // refresh: `${baseUrl}/auth/refresh`),
  //signOut
};

export default api;

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

const baseUrl = "http://localhost:3030";

const api = {
  //   /AUTH/*
  signIn: `${baseUrl}/auth/login`,
  signUp: `${baseUrl}/auth/register`,
  // refresh: `${baseUrl}/auth/refresh`),
  //signOut
};

export default api;

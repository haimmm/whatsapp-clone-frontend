import { useState } from "react";
import "./AuthForm.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

// type propTypes = {
//   setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
// };

enum FormStateType {
  Login,
  Register,
}

export default function AuthForm() {
  const [formState, setFormState] = useState<FormStateType>(
    FormStateType.Login
  );
  const changeFormType = () =>
    setFormState((state) =>
      state ? FormStateType.Login : FormStateType.Register
    );

  return (
    <div className="auth-container">
      {formState ? <SignUp /> : <SignIn />}
      <button className="btn-as-link" onClick={changeFormType}>
        {formState ? "I already have an account" : "Not registered yet?"}
      </button>
    </div>
  );
}

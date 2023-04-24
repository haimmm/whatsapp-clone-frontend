import { useRef } from "react";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { SignUpFormType } from "../../../utils/chatAPI";
import { useAuthContext } from "../../../context/AuthProvider";
import { useMutation } from "@tanstack/react-query";

export default function SignUp() {
  const { signUp } = useAuthContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors: clientErrors },
  } = useForm<SignUpFormType>();

  const { mutate, isLoading, error: serverError } = useMutation(signUp);

  const password = useRef({});
  password.current = watch("password", "");

  const validatePassword = (confirmPassVal: string) =>
    confirmPassVal === password.current ? true : "The passwords do not match.";

  //combaning and shaping both errors from react-quary and react-hook-form into strings list
  const formErrors: string[] = Object.values(clientErrors)
    .map((err) => err.message)
    .filter((msg) => msg) as string[];
  if ((serverError as Error)?.message)
    formErrors.push((serverError as Error).message);

  return (
    <form onSubmit={handleSubmit((values) => mutate(values))}>
      <h3>Sign Up</h3>
      <p>Please sign up to use the chat.</p>
      <input
        type="email"
        placeholder="Email address"
        {...register("email", {
          required: "Email is required.",
        })}
      />
      <input
        type="text"
        placeholder="Name"
        {...register("name", {
          required: "Name is required.",
        })}
      />
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required.",
          pattern: {
            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,15}$/i,
            message: "rules: At least 1 capital, small, number, 8-15 chars",
          },
        })}
      />
      <input
        type="password"
        placeholder="Confirm password"
        {...register("passwordConfirm", {
          required: "Confirm password is required.",
          validate: validatePassword,
        })}
      />
      <input type="submit" disabled={isLoading} />
      {formErrors.length > 0 && (
        <ul className="error-container">
          {formErrors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}
    </form>
  );
}

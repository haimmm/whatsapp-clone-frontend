import { useForm } from "react-hook-form";
import { SignInFormType } from "../../../utils/chatAPI";
import "./SignIn.css";
import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "../../../context/AuthProvider";

export default function SignIn() {
  const { signIn } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors: clientErrors },
  } = useForm<SignInFormType>();

  const { mutate, isLoading, error: serverError } = useMutation(signIn);

  //combaning and shaping both errors from react-quary and react-hook-form into strings list
  const formErrors: string[] = Object.values(clientErrors)
    .map((err) => err.message)
    .filter((msg) => msg) as string[];
  if ((serverError as Error)?.message)
    formErrors.push((serverError as Error).message);

  return (
    <form onSubmit={handleSubmit((values) => mutate(values))}>
      <h3>Sign In</h3>
      <p>Please sign in to your account.</p>
      <input
        type="email"
        placeholder="Email address"
        {...register("email", {
          required: "Email is required.",
        })}
      />
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required.",
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

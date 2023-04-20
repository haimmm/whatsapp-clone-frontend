import { useRef } from "react";
import "./SignUp.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpFormType } from "../../../utils/chatAPI";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormType>();
  const onSubmit: SubmitHandler<SignUpFormType> = (data) => {
    console.log("submit clicked ", data);
    console.log(errors);
  };

  const password = useRef({});
  password.current = watch("password", "");

  const validatePassword = (confirmPassVal: string) =>
    confirmPassVal === password.current ? true : "The passwords do not match.";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <input type="submit" />
      {!!Object.keys(errors).length && (
        <ul className="error-container">
          {errors.email && <li>{errors.email.message}</li>}
          {errors.password && <li>{errors.password.message}</li>}
          {errors.passwordConfirm && <li>{errors.passwordConfirm.message}</li>}
        </ul>
      )}
    </form>
  );
}

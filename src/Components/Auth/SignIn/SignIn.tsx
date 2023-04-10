import { useForm, SubmitHandler } from "react-hook-form";
import "./SignIn.css";

type propTypes = {
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
};

type IFormInput = {
  email: string;
  password: string;
};

export default function SignIn({ setIsRegistered }: propTypes) {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="sign-in-box">
      <h3>Sign In</h3>
      <p>Please sign in to your account.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
          })}
        />
        <input
          type="password"
          {...register("password", {
            required: true,
            pattern:
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!@#$%^&*]{8,15}$/i,
          })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

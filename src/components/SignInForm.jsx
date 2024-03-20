import { useForm } from "react-hook-form";
import {  Link } from "react-router-dom";


function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const formSubmit = (data) => {

   console.log("Form Submitted: ", data);

  };

  return (
    <>
    <form onSubmit={handleSubmit(formSubmit)}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address"
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Log in</button>
    </form>

    <Link to="/signup">Don't have an account? Sign Up</Link>

    </>
  );
}

export default SignInForm;
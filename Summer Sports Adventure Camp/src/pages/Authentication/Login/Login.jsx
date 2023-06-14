import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signIn(email, password).then(() => {});
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      const savedUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        img: loggedInUser.photoURL,
        role: 'student'
      };
      fetch("https://b7a12-summer-camp-server-side-rionelx-slovesky.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      });
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login</h1>
          <p className="py-6">
            Ready for some adventure? Log in and join the fun!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <small className="text-red-600">Email is required</small>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type == "required" && (
                <small className="text-red-600">Password is required</small>
              )}
              {errors.password?.type == "minLength" && (
                <small className="text-red-600">
                  Password must be at least 6 characters long
                </small>
              )}
              {errors.password?.type == "pattern" && (
                <small className="text-red-600">
                  Password must contain at least one uppercase and one special
                  character
                </small>
              )}
              <label className="label">
                <p className="label-text-alt">
                  New here?{" "}
                  <Link to="/register" className="link link-hover">
                    Register now!
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="divider"></div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline bg-red-400 hover:bg-red-700"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

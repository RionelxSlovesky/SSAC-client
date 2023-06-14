import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Registration = () => {
  const { signUp, updateUserProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const photo = data.photo;
    const password = data.password;

    signUp(email, password).then(() => {
      updateUserProfile(name, photo).then(() => {
        const savedUser = { name: name, email: email, img: photo, role: 'student' };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        });
      });
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register</h1>
          <p className="py-6">
            Your kids are missing out! Register now for their bright future in
            sports.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <small className="text-red-600">Name is required</small>
              )}
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photo && (
                <small className="text-red-600">Photo URL is required</small>
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
                  Already have an account?{" "}
                  <Link to="/login" className="link link-hover">
                    Login!
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

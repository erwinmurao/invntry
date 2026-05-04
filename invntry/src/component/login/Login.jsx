import React from "react";
import invntri from "../../assets/invntri.png";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full  h-screen bg-gray-200">
      <div className=" bg-gray-100  flex items-center justify-center">
        <div className="bg-gray-100 w-120  rounded-md  p-12 flex flex-col gap-4">
          <div className="my-2">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold  text-3xl">Welcome Back!</h1>
              <p className="text-sm text-gray-500">Please enter your details</p>
            </div>
          </div>
          <div className="gap-4 flex flex-col ">
            <div className="flex gap-2 flex-col  ">
              <span>Email Address</span>
              <div className="flex items-center rounded-md border-2  border-gray-200  space-x-2 w-full ">
                <div className=" p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="outline-0"
                />
              </div>

              <div>
                {/*Log in show password
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  </div>
                </div>
                */}
              </div>
            </div>
            <div className="flex gap-2 flex-col ">
              <span>Password</span>
              <div className="flex items-center rounded-md border-2  border-gray-200  space-x-2 w-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <input
                  type="password"
                  className="outline-0 px-1"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm ">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" />
                <label className="text-gray-500" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <a href="/forgot-password" className=" text-gray-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="rounded font-semi-bold text-white bg-blue-400 p-1 mt-4 flex items-center justify-center">
            <button>Login</button>
          </div>
          <div className="flex items-center justify-center">
            <p className=" mt-2 text-sm text-gray-500">
              Don't have an account?{" "}
              <a className="font-bold text-blue-700 " href="/signup">
                Sign up
              </a>
            </p>
          </div>
        </div>

        <div className="w-150 flex items-center justify-center">
          <img src={invntri} alt="" object-cover w-full h-auto rounded-lg />
        </div>
      </div>
    </div>
  );
};

export default Login;

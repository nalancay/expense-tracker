import { useState } from "react";
import useSignup from "hooks/useSignup";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, togglePassword] = useState(false);

  const { error, isPending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name);
  };

  return (
    <>
      {isPending ? (
        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
          <div className="border-t-transparent border-solid animate-spin  rounded-full border-[#1f9751] border-8 h-32 w-32"></div>
        </div>
      ) : (
        <form
          className="max-w-[480px] my-16 mx-auto p-5"
          onSubmit={handleSubmit}
        >
          <h2 className="font-bold text-2xl xl:text-3xl">Signup</h2>
          <label className="block my-8 mx-auto">
            <span className="block mb-2">Name</span>
            <input
              type="text"
              className="p-2 w-full outline-[#1f9751] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name..."
              autoComplete="on"
            />
          </label>
          <label className="block my-8 mx-auto">
            <span className="block mb-2">Email</span>
            <input
              type="email"
              className="p-2 w-full outline-[#1f9751] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email..."
              autoComplete="on"
            />
          </label>
          <label className="block my-8 mx-auto relative">
            <span className="block mb-2">Password</span>
            <input
              type={viewPassword ? "text" : "password"}
              className="p-2 w-full outline-[#1f9751] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password..."
              autoComplete="on"
            />
            <img
              src={viewPassword ? "assets/eye-hide.svg" : "assets/eye-see.svg"}
              alt=""
              className="w-4 absolute right-2.5 bottom-3.5 cursor-pointer"
              onClick={() => togglePassword((prev) => !prev)}
            />
          </label>
          <button>
            <a
              href="#_"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#1f9751] transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-white group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#1f9751] group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#1f9751]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Signup
              </span>
            </a>
          </button>
          {error && <p className="text-red-600 bg-red-200 mt-8 p-4">{error}</p>}
        </form>
      )}
    </>
  );
};

export default Signup;

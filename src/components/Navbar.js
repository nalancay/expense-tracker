import { Link } from "react-router-dom";
import useLogout from "hooks/useLogout";
import { useAuthContext } from "hooks/useAuthContext";

const Navbar = () => {
  const { isPending, logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="w-full bg-[#1f9751] p-5">
      <ul className="flex my-0 mx-auto max-w-[1080px] items-center">
        <li className="mr-auto font-bold text-xl text-white">
          <img src="assets/expense-tracker-navbar.svg" alt="" className="h-8" />
        </li>
        {!isPending && (
          <>
            {user ? (
              <>
                <li className="text-white font-medium hidden md:block">
                  <div className="px-5 py-1 relative group overflow-hidden font-medium bg-[#1f9751] text-white inline-block cursor-default">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-100"></span>
                    <span className="relative group-hover:text-[#1f9751]">
                      Welcome, {user.displayName}
                    </span>
                  </div>
                </li>
                <li
                  className="ml-4 md:ml-8 text-white font-medium"
                  onClick={logout}
                >
                  <a
                    href="#_"
                    className="px-5 py-1 relative group overflow-hidden font-medium bg-[#1f9751] text-white inline-block"
                  >
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-100"></span>
                    <span className="relative group-hover:text-[#1f9751]">
                      Logout
                    </span>
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="text-white font-medium">
                  <Link
                    to="/"
                    className="px-5 py-1 relative group overflow-hidden font-medium bg-[#1f9751] text-white inline-block"
                  >
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-100"></span>
                    <span className="relative group-hover:text-[#1f9751]">
                      Login
                    </span>
                  </Link>
                </li>
                <li className="ml-4 md:ml-8 text-white font-medium">
                  <Link
                    to="/signup"
                    className="px-5 py-1 relative group overflow-hidden font-medium bg-[#1f9751] text-white inline-block"
                  >
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-100"></span>
                    <span className="relative group-hover:text-[#1f9751]">
                      Signup
                    </span>
                  </Link>
                </li>
              </>
            )}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

import useLogin from "hooks/useLogin";
import { FormUser } from "components/FormUser";

const Login = () => {
  const { error, isPending, login } = useLogin();

  return (
    <>
      {isPending ? (
        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
          <div className="border-t-transparent border-solid animate-spin  rounded-full border-[#1f9751] border-8 h-32 w-32"></div>
        </div>
      ) : (
        <FormUser error={error} login={login} />
      )}
    </>
  );
};

export default Login;

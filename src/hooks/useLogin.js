import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { functions } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        functions.login(res);
      })
      .catch((err) => {
        setError(err.message);
      });

    setIsPending(false);
  };

  return { error, isPending, login };
};

export default useLogin;

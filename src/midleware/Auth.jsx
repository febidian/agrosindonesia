import { Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getAuth } from "../store/auth";

function Auth({ children }) {
  const auth = useRecoilValue(getAuth);

  if (!auth.check) {
    return <Redirect to="/masuk" />;
  }

  return children;
}

export default Auth;

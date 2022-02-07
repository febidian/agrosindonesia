import { Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getAuth } from "../store/auth";

function Guest({ children }) {
  const auth = useRecoilValue(getAuth);

  if (auth.check) {
    return <Redirect to="/" />;
  }

  return children;
}

export default Guest;

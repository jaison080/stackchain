import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

function Login({ className }) {
  const { loginStatus, smartAccount,handleLogin} = useContext(UserContext);
  return (
    <div className={className} onClick={handleLogin}>
      {loginStatus === "loading" && "Loading..."}
      {loginStatus === "logginIn" && "Logging In..."}
      {loginStatus === "logginOut" && "Logging Out..."}
      {loginStatus === "loggedIn" && smartAccount?.address}
      {loginStatus === "loggedOut" && "Login"}
    </div>
  );
}

export default Login;

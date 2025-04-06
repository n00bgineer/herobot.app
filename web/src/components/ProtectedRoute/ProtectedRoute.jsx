import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router";
import SplashScreen from "../SplashScreen/SplashScreen";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated, isLoading)

  // IN LOADING STATE
  if (isLoading) {
    return <SplashScreen showProgress={true} />;
  }
  else{
    // IN UN-AUTHENTICATED STATE
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }
    return <Outlet />;
  }
};

export default ProtectedRoute;
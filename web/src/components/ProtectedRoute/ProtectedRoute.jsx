import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  // IN LOADING STATE
  if (isLoading) {
    return <div>Loading...</div>;
  }
  else{
    // IN UN-AUTHENTICATED STATE
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }
    return children;
  }
};

export default ProtectedRoute;
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../context/GlobalState";

const UnProtectedRoute = ({ children }: any) => {
  const { auth } = useAppSelector();

  if (auth?.isAuth)
    return auth?.userDetails?.isAdmin ? (
      <Navigate to={`/admin/overview`} replace />
    ) : (
      <Navigate to={`/`} replace />
    );

  return children;
};

export default UnProtectedRoute;

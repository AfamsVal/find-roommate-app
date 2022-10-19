import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../context/GlobalState";
import Footer from "../footer/Footer";
import NavBarComponent from "../nav-bar/NavBarComponent";

const ProtectedRoute = ({ children }: any) => {
  const { auth } = useAppSelector();

  if (!auth.isAuth) return <Navigate to={`/login`} replace />;

  return (
    <>
      <NavBarComponent />
      {children}
      <Footer />
    </>
  );
};

export default ProtectedRoute;

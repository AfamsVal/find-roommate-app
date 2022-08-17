import Footer from "../footer/Footer";
import NavBarComponent from "../nav-bar/NavBarComponent";

const CustomerRoute = ({ children }: any) => {
  return (
    <>
      <NavBarComponent />
      {children}
      <Footer />
    </>
  );
};

export default CustomerRoute;

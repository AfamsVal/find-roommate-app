import About from "./Pages/about/About";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/login/Login";
import NotFound from "./Pages/not-found/NotFound";
import Register from "./Pages/register/Register";
import ContactUs from "./Pages/contact-us/ContactUs";
import ForgotPassword from "./Pages/forgot-password/ForgotPassword";
import ChangePassword from "./Pages/change-password/ChangePassword";
import Home from "./Pages/home/Home";
import ProtectedRoute from "./components/protected-routes/ProtectedRoute";
import CustomerRoute from "./components/customer-routes/CustomerRoute";
import Faq from "./Pages/faq/Faq";
import Overview from "./Pages/admin/overview/Overview";
import FindRoom from "./Pages/find-room/FindRoom";
import FindRoommate from "./Pages/find-roommate/FindRoommate";
import GlobalState from "./context/GlobalState";
import UploadTab from "./Pages/upload-items/UploadTab";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import AdminRoute from "./components/admin-route/AdminRoute";
import Users from "./Pages/admin/users/Users";
import AdminContact from "./Pages/admin/contacts/AdminContact";
import AdminRooms from "./Pages/admin/rooms/AdminRooms";

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalState>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route
              path="/"
              element={
                <CustomerRoute>
                  <Home />
                </CustomerRoute>
              }
            />
            <Route
              path="/about-us"
              element={
                <CustomerRoute>
                  <About />
                </CustomerRoute>
              }
            />
            <Route
              path="/contact-us"
              element={
                <CustomerRoute>
                  <ContactUs />
                </CustomerRoute>
              }
            />

            <Route
              path="/faq"
              element={
                <CustomerRoute>
                  <Faq />
                </CustomerRoute>
              }
            />
            <Route path="admin" element={<AdminRoute auth={true} />}>
              <Route path="overview" element={<Overview />} />
              <Route path="users" element={<Users />} />
              <Route path="contact" element={<AdminContact />} />
              <Route path="rooms" element={<AdminRooms />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route
              path="/find-room"
              element={
                <ProtectedRoute auth={true}>
                  <FindRoom />
                </ProtectedRoute>
              }
            />
            <Route
              path="/find-roommate"
              element={
                <ProtectedRoute auth={true}>
                  <FindRoommate />
                </ProtectedRoute>
              }
            />
            <Route
              path="/upload-items"
              element={
                <ProtectedRoute auth={true}>
                  <UploadTab />
                </ProtectedRoute>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </GlobalState>
    </div>
  );
}

export default App;

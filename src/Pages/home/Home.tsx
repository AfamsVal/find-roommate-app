import { useEffect, useRef } from "react";
import CallToActionBtn from "../../components/call-to-action/CallToActionBtn";
import { getAllListing } from "../../context/actions/roomsAction";
import { useAppSelector } from "../../context/GlobalState";
import useToast from "../../hooks/toast/useToast";
import Listings from "../places/Listings";
import FirstSection from "./FirstSection";

const Home = () => {
  const { dispatch } = useAppSelector();
  const [openNotification] = useToast();

  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      window.scrollTo(0, 0);

      getAllListing(dispatch, { start: 0, limit: 50 });

      firstRenderRef.current = false;
    }
  }, [dispatch, openNotification]);

  return (
    <div className="container-fluid fix-offset">
      <FirstSection />
      <CallToActionBtn />
      <Listings />
    </div>
  );
};

export default Home;

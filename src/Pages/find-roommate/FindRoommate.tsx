import { useEffect, useRef } from "react";
import ButtomLine from "../../components/buttom-border/ButtomLine";
import FilterSection from "../../components/filter/FilterSection";
import EmptyState from "../../components/loader/EmptyState";
import Loader from "../../components/loader/Loader";
import CardWithModalDetails from "../../components/modal/CardWithModalDetails";
import { getAllRoommatesAction } from "../../context/actions/roomsAction";
import { useAppSelector } from "../../context/GlobalState";
import useToast from "../../hooks/toast/useToast";

const FindRoommate = () => {
  const { dispatch, listing } = useAppSelector();
  const [openNotification] = useToast();

  const firstRenderRef = useRef(true);

  const { loading, roommateListing } = listing;

  useEffect(() => {
    if (firstRenderRef.current) {
      window.scrollTo(0, 0);

      getAllRoommatesAction(dispatch, openNotification);

      firstRenderRef.current = false;
    }
  }, [dispatch, openNotification]);

  return (
    <div className="container-fluid fix-offset">
      <div className="row">
        <div className="col-md-10 text-center mx-auto my-3">
          <h1 className="gradient-text">Find Roommate</h1>
          <div className="my-3">
            <ButtomLine circleSize="12px" lineSize="100px" align="center" />
          </div>
          <p>Below is the list of top trusted rooms you can pick from.</p>
        </div>
      </div>
      <FilterSection />
      <div className="row" style={{ marginBottom: "100px" }}>
        {loading ? (
          <div className="col-md-12 mt-5 pt-2">
            <div className="row">{loading && <Loader />}</div>
          </div>
        ) : !loading && roommateListing.length ? (
          <CardWithModalDetails items={roommateListing} />
        ) : (
          !loading && !roommateListing.length && <EmptyState />
        )}
      </div>
    </div>
  );
};

export default FindRoommate;

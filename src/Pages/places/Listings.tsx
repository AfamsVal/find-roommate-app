import ButtomLine from "../../components/buttom-border/ButtomLine";
import FilterSection from "../../components/filter/FilterSection";
import EmptyState from "../../components/loader/EmptyState";
import Loader from "../../components/loader/Loader";
import CardWithModalDetails from "../../components/ProfileModalDetails.module.css/CardWithModalDetails";
import { useAppSelector } from "../../context/GlobalState";

const Listings = () => {
  const { listing } = useAppSelector();
  const { allListing, loading } = listing;

  return (
    <div className="row bg-lighter mt-5">
      <div className="col-md-12 my-4 pt-3 text-center">
        <h1 className="text-main">Recent Listings</h1>
        <div className="my-3">
          <ButtomLine circleSize="12px" lineSize="100px" align="center" />
        </div>
        <p>We connect you to the best rooms and roommates in your location. </p>
      </div>
      <FilterSection />
      <div className="col-md-12">
        <div className="row" style={{ marginBottom: "100px" }}>
          {loading ? (
            <div className="col-md-12 mt-5 pt-2">
              <div className="row">
                <Loader />
              </div>
            </div>
          ) : !loading && allListing.length ? (
            <CardWithModalDetails items={allListing} />
          ) : (
            !loading && !allListing.length && <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
};

export default Listings;

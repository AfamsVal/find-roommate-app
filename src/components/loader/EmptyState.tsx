import style from "./Loader.module.css";
import noResult from "../../assets/images/no-results.gif";
// import noResult from "../../assets/images/no-result.gif";
// import noResult from "../../assets/images/no-result.png";

const EmptyState = () => {
  return (
    <div className={`${style.loader} col-12 px-5`}>
      <img src={noResult} alt="loading..." className="img-fluid " />
    </div>
  );
};

export default EmptyState;

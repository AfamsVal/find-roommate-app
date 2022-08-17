import style from "./Loader.module.css";
import imgLoader from "../../assets/images/loading.gif";

const Loader = () => {
  return (
    <div className={`${style.loader} col-12 px-5`}>
      <img src={imgLoader} alt="loading..." className="img-fluid " />
    </div>
  );
};

export default Loader;

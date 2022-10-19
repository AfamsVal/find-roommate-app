import { useEffect, useState } from "react";
import "./Overview.css";
import allImg from "../../../assets/icons/applications.svg";
import approvedImg from "../../../assets/icons/approved.png";
import pendingImg from "../../../assets/icons/pending.png";
import decinedImg from "../../../assets/icons/declined.png";
import PersonalInfo from "../../../components/personal-info/PersonalInfo";
import { useAppSelector } from "../../../context/GlobalState";
import { getRoomStatistics } from "../../../context/actions/roomsAction";
import { useNavigate } from "react-router-dom";

interface IStatistics {
  count: null | number;
  title: string;
  img: string;
}

const Overview = () => {
  const { dispatch, listing } = useAppSelector();
  const navigate = useNavigate();

  useEffect(() => {
    getRoomStatistics(dispatch);
  }, [dispatch]);

  const { statistics }: any = listing;

  const [statis, setStatis] = useState<IStatistics[]>([
    {
      count: null,
      title: "All Applications",
      img: allImg,
    },
    {
      count: null,
      title: "Pending Applications",
      img: pendingImg,
    },
    {
      count: null,
      title: "Verified Applications",
      img: approvedImg,
    },
    {
      count: null,
      title: "Blocked Applications",
      img: decinedImg,
    },
  ]);

  useEffect(() => {
    setStatis([
      {
        count: statistics?.total,
        title: "All Applications",
        img: allImg,
      },
      {
        count: statistics?.pending,
        title: "Pending Applications",
        img: pendingImg,
      },
      {
        count: statistics?.verified,
        title: "Verified Applications",
        img: approvedImg,
      },
      {
        count: statistics?.blocked,
        title: "Blocked Applications",
        img: decinedImg,
      },
    ]);
  }, [statistics]);

  return (
    <>
      <div className="row mt-4">
        {statis.map((item: IStatistics, i: number) => (
          <div
            onClick={() => navigate("/admin/rooms")}
            key={i}
            className="col-6 col-sm-4 col-md-3 mb-3"
          >
            <div className="row">
              <div className="col-11 col-md-11 mx-auto stats-box d-flex justify-between cursor-pointer">
                <div className="stat-title">
                  <h3 className="text-dark">
                    {item?.count !== null ? (
                      item.count
                    ) : (
                      <span className="spinner-border spinner-border-md"></span>
                    )}
                  </h3>
                  <p>{item.title}</p>
                </div>
                <div className="stat-icon px-2">
                  <img src={item.img} className="w-100" alt="applications" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <PersonalInfo />
      </div>
    </>
  );
};

export default Overview;

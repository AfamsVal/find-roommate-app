import React, { useState } from "react";
import { useQuery } from "react-query";
import "./Overview.css";
import allImg from "../../../assets/icons/applications.svg";
import approvedImg from "../../../assets/icons/approved.png";
import pendingImg from "../../../assets/icons/pending.png";
import decinedImg from "../../../assets/icons/declined.png";
import PersonalInfo from "../../../components/personal-info/PersonalInfo";

interface IStatistics {
  count: number;
  title: string;
  img: string;
}
const Overview = () => {
  const [statistics, setStatistics] = useState<IStatistics[]>([
    { count: 102, title: "All Applications", img: allImg },
    { count: 64, title: "Pending Applications", img: pendingImg },
    { count: 5, title: "Approvd Applications", img: approvedImg },
    { count: 24, title: "Declined Applications", img: decinedImg },
  ]);
  // const userLogin = async () => {
  //   const data = await fetch("https://jsonplaceholder.typicode.com/users");
  //   return await data.json();
  // };

  // const { data, status } = useQuery("login", userLogin);

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (status === "error") {
  //   return <div>Error...</div>;
  // }

  return (
    <>
      <div className="row mt-4">
        {statistics.map((item: IStatistics, i: number) => (
          <div key={i} className="col-6 col-sm-4 col-md-3 mb-3">
            <div className="row">
              <div className="col-11 col-md-11 mx-auto stats-box d-flex justify-between cursor-pointer">
                <div className="stat-title">
                  <h3 className="text-dark">{item.count}</h3>
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

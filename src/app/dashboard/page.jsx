"use client";

import { useSelector } from "react-redux";
import Main from "../../components/Dashboard/Main";
import DashHeader from "../../components/Dashboard/DashHeader";
import NewSessionModal from "../../components/Modals/NewSessionModal";

const Dashboard = () => {
  const { newsessionmodal } = useSelector((store) => store?.dashboard);
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start">
      <DashHeader />
      <Main />
      {newsessionmodal && <NewSessionModal />}
    </div>
  );
};

export default Dashboard;

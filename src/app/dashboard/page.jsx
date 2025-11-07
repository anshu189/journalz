"use client";

import { useSelector } from "react-redux";
import Main from "../../components/Dashboard/Main";
import DashHeader from "../../components/Dashboard/DashHeader";
import NewSessionModal from "../../components/Modals/NewSessionModal";

const Dashboard = () => {
  const { newsessionmodal } = useSelector((store) => store?.dashboard);
  return (
    <div className="h-[100%] flex flex-col items-center justify-start overflow-x-hidden">
      <DashHeader />
      <Main />
      {newsessionmodal && <NewSessionModal />}
    </div>
  );
};

export default Dashboard;

"use client";

import Main from "../../components/Dashboard/Main";
import DashHeader from "../../components/Dashboard/DashHeader";
const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start">
      <DashHeader />
      <Main />
    </div>
  );
};

export default Dashboard;

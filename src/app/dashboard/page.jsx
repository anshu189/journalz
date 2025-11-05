"use client";

import Main from "../../components/Dashboard/Main";
import CalendarWrapper from "../../components/Dashboard/CalendarWrapper";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-start p-10">
      <CalendarWrapper />
      <Main />
    </div>
  );
};

export default Dashboard;

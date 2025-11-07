"use client";

import DashHeader from "../../../components/Dashboard/DashHeader";
import { SnackProvider } from "../../../utils/SnackProvider";

const layout = ({ children }) => {
  return (
    <SnackProvider>
      <div className="h-[100%] flex flex-col items-center justify-start overflow-x-hidden">
        <DashHeader />
        {children}
      </div>
    </SnackProvider>
  );
};

export default layout;

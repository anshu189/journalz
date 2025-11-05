import { SnackProvider } from "../../utils/SnackProvider";

const Dashboardlayout = ({ children }) => {
  return (
    <div>
      <SnackProvider>{children}</SnackProvider>
    </div>
  );
};

export default Dashboardlayout;

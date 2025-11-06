import { Button, Link } from "@heroui/react";
import { useDispatch } from "react-redux";
import { sessionModalToggle } from "../../store/Slices/DashboardSlice";

const DashHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-screen flex items-center justify-between text-secondary-black bg-tertiary-white px-[5%] py-[1%]">
      <div>
        <Link href="/">
          <p className="font-bold text-2xl">JournalZ</p>
        </Link>
      </div>

      <div>
        <Button
          color="primary"
          variant="solid"
          onClickCapture={() => dispatch(sessionModalToggle())}
        >
          <span className="text-xl">+</span> New Session
        </Button>
      </div>
    </div>
  );
};

export default DashHeader;

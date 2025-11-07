"use client";

import { Button, Link } from "@heroui/react";
import { useDispatch } from "react-redux";
import { sessionModalToggle } from "../../store/Slices/DashboardSlice";
import { usePathname } from "next/navigation";

const DashHeader = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();

  return (
    <div className="w-screen flex items-center justify-between text-secondary-black bg-tertiary-white px-[5%] py-[1%]">
      <div>
        <Link href="/">
          <p className="font-bold text-2xl">JournalZ</p>
        </Link>
      </div>
      {pathname.startsWith("/dashboard") && (
        <div>
          <Button
            color="primary"
            variant="solid"
            onClickCapture={() => dispatch(sessionModalToggle())}
          >
            <span className="text-xl">+</span> New Session
          </Button>
        </div>
      )}
      {pathname.startsWith("/sessions/") && (
        <div>
          <Button
            as={Link}
            color="primary"
            variant="solid"
            href="/dashboard"
            onClickCapture={() => dispatch(sessionModalToggle())}
          >
            All Sessions
          </Button>
        </div>
      )}
    </div>
  );
};

export default DashHeader;

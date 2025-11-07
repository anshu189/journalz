"use client";

import { Link } from "@heroui/link";
import { use } from "react";
import { useSelector } from "react-redux";
import CalendarWrapper from "../../../components/Dashboard/CalendarWrapper";

const MainSessionDashboard = ({ params }) => {
  const resolvedparams = use(params);
  const { id } = resolvedparams;

  const currentactivesession = useSelector((store) =>
    store?.dashboard?.sessions.find((sess) => sess.id.toString() === id)
  );

  console.log(currentactivesession);

  if (currentactivesession === undefined) {
    return (
      <div className="w-screen h-[calc(100vh_-_200px)] flex flex-col items-center justify-center gap-2 ">
        <p className="text-4xl tracking-wide">Session Not Found</p>
        <div className="text-lg">
          Go to{" "}
          <span>
            <Link href="/dashboard" underline="always" color="warning">
              Sessions
            </Link>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col items-start gap-10 px-[10%] py-[2%]">
      <p className="text-3xl tracking-wider">
        <span>Session:</span> {currentactivesession?.name}
      </p>
      {/* <div> */}
      <CalendarWrapper />
      {/* </div> */}
    </div>
  );
};

export default MainSessionDashboard;

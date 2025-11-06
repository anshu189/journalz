"use client";

import NewSessionModal from "../Modals/NewSessionModal";
import CalendarWrapper from "./CalendarWrapper";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const Main = () => {
  const pathname = usePathname();

  const { sessions, newsessionmodal } = useSelector(
    (store) => store?.dashboard
  );
  return (
    <div className="relative w-screen h-screen flex flex-col px-[5%] py-[1%]">
      Dashboard Second Container after Calendar
      {newsessionmodal && <NewSessionModal />}
      {sessions.length ? <CalendarWrapper /> : ""}
    </div>
  );
};

export default Main;

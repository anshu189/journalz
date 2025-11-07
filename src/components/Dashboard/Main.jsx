"use client";

import CalendarWrapper from "./CalendarWrapper";
import { useSelector } from "react-redux";
const Main = () => {
  const { sessions, newsessionmodal } = useSelector(
    (store) => store?.dashboard
  );
  return (
    <div
      className={`relative w-screen h-screen flex flex-col px-[5%] py-[1%] ${newsessionmodal ? "blur-md" : ""}`}
    >
      Dashboard Second Container after Calendar
      {sessions.length ? <CalendarWrapper /> : ""}
    </div>
  );
};

export default Main;

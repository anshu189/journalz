"use client";

import { useSelector } from "react-redux";
import SessionsContainer from "./Sessions/SessionsContainer";

const Main = () => {
  const { sessions, newsessionmodal } = useSelector(
    (store) => store?.dashboard
  );

  return (
    <div
      className={`relative bg-secondary-black !h-[100%] w-screen h-screen flex flex-col items-start gap-2 px-[10%] py-[2%] ${newsessionmodal ? "blur-sm" : ""}`}
    >
      <div>
        <p className="text-3xl tracking-wide">
          {sessions.length === 0
            ? "No Sessions Available"
            : "Available Sessions"}
        </p>
      </div>
      <hr className="w-full bg-none border-1 border-white/10" />
      <div className="w-full flex flex-col gap-6 mt-6">
        {sessions?.map((session) => (
          <SessionsContainer key={session.id} sessiondata={session} />
        ))}
      </div>
    </div>
  );
};

export default Main;

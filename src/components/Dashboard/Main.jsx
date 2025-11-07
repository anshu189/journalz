"use client";

import { useDispatch, useSelector } from "react-redux";
import SessionsContainer from "./Sessions/SessionsContainer";
import { useState } from "react";

const Main = () => {
  const { sessions, newsessionmodal } = useSelector(
    (store) => store?.dashboard
  );

  return (
    <div
      className={`relative w-screen h-screen flex flex-col items-start gap-10 px-[10%] py-[2%] ${newsessionmodal ? "bg-white/10 blur-sm" : ""}`}
    >
      <div>
        {sessions.length === 0 ? (
          <p className="text-3xl tracking-wider">No Sessions Available</p>
        ) : (
          <p className="text-3xl tracking-wider">Available Sessions</p>
        )}
      </div>
      <div className="w-full flex flex-col gap-6">
        {sessions?.map((session, i) => (
          <SessionsContainer key={i} data={session} />
        ))}
      </div>
    </div>
  );
};

export default Main;

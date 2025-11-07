"use client";

import { Button } from "@heroui/button";
import { useDispatch } from "react-redux";
import { removeSession } from "../../../store/Slices/DashboardSlice";
import { addactiveSession } from "../../../store/Slices/SessionSlice";
import { useRouter } from "next/navigation";
const SessionsContainer = ({ sessiondata }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handlesessionDelete = () => {
    dispatch(removeSession(sessiondata));
  };

  const handleOpenSession = () => {
    dispatch(addactiveSession(sessiondata.name));
    router.push(`/sessions/${sessiondata.id}`);
  };

  return (
    <div className="cursor-pointer shadow-md w-full px-6 py-4 rounded-lg flex justify-between items-center bg-white/10">
      <p className="text-xl font-semibold">{sessiondata.name}</p>
      <div className="flex gap-4 items-center">
        <Button
          color="primary"
          variant="solid"
          size="lg"
          onClickCapture={handleOpenSession}
        >
          Open Session
        </Button>
        <Button
          color="danger"
          variant="light"
          size="lg"
          onClickCapture={handlesessionDelete}
        >
          Delete Session
        </Button>
      </div>
    </div>
  );
};

export default SessionsContainer;

"use client";

import { Button } from "@heroui/button";
import { useDispatch } from "react-redux";
import { removeSession } from "../../../store/Slices/DashboardSlice";

const SessionsContainer = ({ data }) => {
  const dispatch = useDispatch();

  const handlesessionDelete = () => {
    dispatch(removeSession(data));
  };

  return (
    <div className="cursor-pointer shadow-md w-full px-6 py-4 rounded-lg flex justify-between items-center bg-white/10">
      <p className="text-xl font-semibold">{data}</p>
      <div className="flex gap-4 items-center">
        <Button color="primary" variant="solid" size="lg">
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

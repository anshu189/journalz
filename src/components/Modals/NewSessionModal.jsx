import { Button } from "@heroui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addSession,
  sessionModalToggle,
} from "../../store/Slices/DashboardSlice";

const NewSessionModal = () => {
  const [sessionName, setSessionName] = useState("");
  const dispatch = useDispatch();

  const handleCreateSession = () => {
    dispatch(addSession(sessionName));
    dispatch(sessionModalToggle());
  };

  const handleCloseModal = () => {
    dispatch(sessionModalToggle(false));
  };

  return (
    <div className="absolute z-20 w-4/12 flex flex-col gap-1 text-tertiary-white rounded-lg px-6 py-4 bg-secondary-black top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg">
      <p className="text-lg">Session Name</p>
      <input
        type="text"
        value={sessionName}
        onChange={(e) => setSessionName(e.target.value)}
        className="border-1 rounded-md p-2"
      />
      <div className="flex gap-4 items-center justify-between my-2">
        <Button
          onClickCapture={handleCloseModal}
          color="primary"
          variant="flat"
          className="w-full mt-2"
        >
          Cancel
        </Button>
        <Button
          onClickCapture={handleCreateSession}
          color="primary"
          variant="solid"
          className="w-full mt-2"
        >
          Create Session
        </Button>
      </div>
    </div>
  );
};

export default NewSessionModal;

import { Button } from "@heroui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSession,
  addSessionIdCounter,
  sessionModalToggle,
} from "../../store/Slices/DashboardSlice";

const NewSessionModal = () => {
  const [sessionName, setSessionName] = useState("");
  const [sessionerror, setSessionerror] = useState(false);
  const modalinputref = useRef(null);
  const modalisOpen = useSelector((store) => store?.dashboard?.newsessionmodal);

  const dispatch = useDispatch();
  const sessionidcounter = useSelector(
    (store) => store?.dashboard?.sessionidcounter
  );

  useEffect(() => {
    if (modalinputref.current && modalisOpen) {
      modalinputref.current.focus();
    }
  }, [modalisOpen]);

  const handleCreateSession = () => {
    if (!sessionName) {
      setSessionerror(true);
      return;
    }

    dispatch(addSession({ id: sessionidcounter, name: sessionName }));
    dispatch(addSessionIdCounter());
    dispatch(sessionModalToggle());
  };

  const handleCloseModal = () => {
    dispatch(sessionModalToggle(false));
  };

  return (
    <div className="fixed flex items-center justify-center z-20 w-screen h-full">
      <div className="w-4/12 flex flex-col gap-1 text-tertiary-white rounded-lg px-6 py-4 bg-secondary-black shadow-lg">
        <p className="text-lg">Session Name</p>
        <input
          type="text"
          ref={modalinputref}
          value={sessionName}
          onChange={(e) => setSessionName(e.target.value)}
          onKeyDownCapture={(e) => {
            if (e.key === "Enter") {
              handleCreateSession();
            }
          }}
          className="border-1 rounded-md p-2"
        />
        {sessionerror && (
          <p className="text-sm text-red-400">
            Please enter a valid session name.
          </p>
        )}
        <p></p>
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
    </div>
  );
};

export default NewSessionModal;

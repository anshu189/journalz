import { Button } from "@heroui/react";
import { futuresContracts } from "../../Data/FutureContractsData/FutureContracts";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addSession,
  sessionModalToggle,
} from "../../store/Slices/DashboardSlice";

const NewTradeModal = () => {
  const [asset, setasset] = useState("");
  const dispatch = useDispatch();

  const handleAssetSelection = () => {
    const getasset = futuresContracts.find(
      (contract) => contract.symbol === asset
    );
    dispatch(addSession(getasset));
    dispatch(sessionModalToggle());
  };
  return (
    <div className="absolute w-4/12 flex flex-col gap-2 text-secondary-black rounded-lg px-6 py-4 bg-tertiary-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg">
      <p className="text-lg font-semibold">Choose your Asset</p>
      <select
        className="border-1 rounded-md p-2 cursor-pointer overflow-y-scroll"
        onChange={(e) => setasset(e.target.value)}
      >
        <option value="" hidden>
          Select
        </option>
        {futuresContracts.map((contract) => {
          return (
            <option
              key={contract.id}
              name={contract.name}
              value={contract.symbol}
            >
              ({contract.symbol}) - {contract.name}
            </option>
          );
        })}
      </select>
      <Button
        onClickCapture={handleAssetSelection}
        color="primary"
        variant="solid"
        className="self-end mt-2 w-3/12"
      >
        Create Session
      </Button>
    </div>
  );
};

export default NewTradeModal;

"use client";

import { Button } from "@heroui/button";

const Main = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center px-[5%] py-[1%] pt-[2%]">
      <div className="w-6/12 p-6 rounded-lg flex justify-between items-center bg-white/10">
        <p className="text-xl font-semibold">Nasdaq 100 E-mini</p>
        <Button color="danger" variant="solid">
          Delete Session
        </Button>
      </div>
    </div>
  );
};

export default Main;

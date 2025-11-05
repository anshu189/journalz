"use client";

import { useSnack } from "../../utils/SnackProvider";
import { MainCalendar } from "./MainCalendar";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function CalendarWrapper() {
  const { createSnack } = useSnack();

  const onClickHandler = (day, month, year) => {
    const snackMessage = `Clicked on ${monthNames[month]} ${day}, ${year}`;
    createSnack(snackMessage, "success");
  };

  return (
    <div className="relative flex h-screen max-h-screen w-full flex-col gap-4 px-4 pt-4 items-center justify-center">
      <div className="relative h-full overflow-auto mt-20">
        <MainCalendar onClick={onClickHandler} />
      </div>
    </div>
  );
}

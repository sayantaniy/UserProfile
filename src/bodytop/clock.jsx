import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(now);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center ml-5">
      <div className=" text-white px-10 py-6 rounded-2xl shadow-2xl backdrop-blur-md ">
        <p className="t5 font-dmserif tracking-wide text-center">Time</p>
        <h1 className="mt-1 t6 font-semibold tracking-widest text-center">
          {time}
        </h1>
      </div>
    </div>
  );
}

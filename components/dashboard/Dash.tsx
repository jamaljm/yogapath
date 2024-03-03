import React from "react";
import Card from "./Card";
import Mob from "./Mob";
import Music from "./Music";

export default function Dash() {
  return (
    <div className="bg-white w-full border-t-2  border-green-200   min-h-screen flex justify-center rounded-t-3xl -mt-2 pt-4 items-center">
      <div className="flex-1 px-5  w-full min-h-screen ">
        <Card />
      </div>
      <div className="flex-1  w-full min-h-screen">
        <Mob />
      </div>
      <div className="flex-1  w-full h min-h-screen ">
        <Music />
      </div>
    </div>
  );
}

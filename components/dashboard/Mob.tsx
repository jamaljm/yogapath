"use client";

import React, { useState } from "react";
import axios from "axios";
import { Button } from "@nextui-org/button";

const YogaWebsite = () => {
  const [searchInput, setSearchInput] = useState("");
  const [yogaInstructions, setYogaInstructions] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: searchInput },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
        }
      );

      const yogaResponse = response.data.choices[0].message.content;
      setYogaInstructions(yogaResponse);
    } catch (error) {
      console.error("Error fetching yoga instructions:", error);
    }
  };

  return (
    <>
      <div className="min-w-screen  min-h-screen flex items-start justify-center px-3 ">
        <div className="w-full bg-white  rounded-2xl h-fit text-gray-800 overflow-hidden border-4 border-white  rounded-4xl shadow-lg relative">
          <div className="phone-top">
            <div className="phone-top-inner"></div>
          </div>
          <div className="w-full bg-gradient-to-br from-green-500  to-blue-600 pt-20 pb-5 px-4 text-white">
            <h1 className="text-3xl font-light mb-3">
              Your AI Yoga instructor
            </h1>
            <div className="mb-5">
              <input
                type="text"
                className="w-full text-white bg-white bg-opacity-20 rounded-full border-2 border-transparent focus:border-white focus:border-opacity-50 focus:outline-none px-3 py-2 leading-none text-sm transition-colors placeholder-white placeholder-opacity-50"
                placeholder="Enter your yoga query"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Button
                radius="full"
                className="bg-gradient-to-br mt-3 font-body4 from-green-300  to-blue-300 font-normal hover:text-white py-2 px-4  "
                onClick={handleSearch}
              >
                Get personalize instruction
              </Button>
            </div>
          </div>
          <div className="bg-gray-50 min-h-56 px-2">
            <div className="flex">
              {" "}
              <p className="text-sm font-body4 mt-4 px-2">{yogaInstructions}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YogaWebsite;

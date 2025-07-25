"use-client";
import { React, useRef, useState, useEffect } from "react";
import Groups from "../Components/Groups/Groups.json";

export default function Play({ groupCode }) {
  const inputRef = useRef(null);
  const [groupName, setGroupName] = useState("");
  const [validGroupName, setValidGroupName] = useState([]);
  const [firstAnswer, setFirstAnswer] = useState("");

  useEffect(() => {
    const matchedGroup = Object.entries(Groups.groups).find(
      ([name, data]) => data.unique_code === groupCode
    );

    if (matchedGroup) {
      const [name] = matchedGroup;
      setGroupName(name);
    }
  }, [groupCode, Groups]);

  console.log(groupName);

  return (
    <div className="relative max-w-md md:max-w-xl lg:max-w-4xl h-full mx-auto flex center justify-center items-center p-4">
      <img src="/Images/TV.png" alt="TV" className="mt-22 relative" />
      <h1
        style={{ fontFamily: "Anton" }}
        className="font-bold text-5xl absolute top-[27%] text-[#111111] text-center"
      >
        Insert the Answer
      </h1>
      <div className="absolute top-[35%]">
        <p className="text-center mb-8 text-xl"></p>
        <div
          className="flex gap-2 my-3 justify-center"
          onClick={() => inputRef.current?.focus()}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-10 h-12 bg-[#C1C1C1] rounded-md flex items-center justify-center text-xl font-bold text-black"
            >
              {groupName[i] || ""}
            </div>
          ))}
          <input
            ref={inputRef}
            type="text"
            value={groupName}
            onChange={(e) => {
              setGroupName(e.value);
            }}
            maxLength={5}
            className="absolute opacity-0"
            autoFocus
          />
        </div>
        <div className="absolute flex items-center justify-center -bottom-[40%]">
          <input
            type="text"
            placeholder=""
            className="bg-transparent border-b-2 border-white text-white text-center text-2xl focus:outline-none placeholder-white font-[Anton]"
            maxLength={10}
          />
        </div>
      </div>
      <div
        className="text-3xl bottom-[34.5%] left-[28%] font-bold absolute text-[#111111]"
        style={{ fontFamily: "Anton" }}
      >
        ROUND 1
      </div>

      <div
        style={{ fontFamily: "Anton" }}
        className="absolute left-[25%] bottom-[27%] text-white px-6 py-2 mt-2 text-4xl"
      >
        GUESS THE MOVE
      </div>
    </div>
  );
}

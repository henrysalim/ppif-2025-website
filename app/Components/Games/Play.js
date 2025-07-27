"use-client";
import { React, useState, useEffect, useRef } from "react";
import Groups from "../Groups/Groups.json";

export default function Play({ groupCode }) {
  // State for game progression
  const [groupData, setGroupData] = useState(null);
  const [currentRound, setCurrentRound] = useState(1);
  const [userInput, setUserInput] = useState("");

  // State for the final word input
  const [groupName, setGroupName] = useState("");
  const [finalAnswerState, setFinalAnswerState] = useState([]);
  const [isFinalInputStage, setIsFinalInputStage] = useState(false);
  const inputRefs = useRef([]);

  // State for visual feedback and displaying letters
  const [isRoundCorrect, setIsRoundCorrect] = useState(false);
  const [isRoundWrong, setIsRoundWrong] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isFinalAnswerWrong, setIsFinalAnswerWrong] = useState(false);
  const [permanentLetters, setPermanentLetters] = useState([]);

  useEffect(() => {
    const matchedEntry = Object.entries(Groups.groups).find(
      ([name, data]) => data.unique_code === groupCode
    );

    if (matchedEntry) {
      const [name, data] = matchedEntry;
      setGroupName(name);
      setGroupData(data);
      setFinalAnswerState(new Array(name.length).fill(""));
    }
  }, [groupCode]);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    const roundMap = {
      1: "first_answer_detail",
      2: "second_answer_detail",
      3: "third_answer_detail",
      4: "fourth_answer_detail",
    };
    const currentAnswerKey = roundMap[currentRound];
    const correctAnswer = groupData[currentAnswerKey]?.answer;

    if (!correctAnswer) return;

    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
      setIsRoundCorrect(true);

      const { letter, letter_position } = groupData[currentAnswerKey];
      if (letter && letter_position) {
        const newFinalAnswer = [...finalAnswerState];
        newFinalAnswer[letter_position - 1] = letter.toUpperCase();
        setFinalAnswerState(newFinalAnswer);
      }

      if (groupData[roundMap[3]] && groupData[roundMap[4]]) {
        if (currentRound === 3 || currentRound === 4) {
          if (letter && !permanentLetters.includes(letter.toUpperCase())) {
            setPermanentLetters((prev) => [...prev, letter.toUpperCase()]);
          }
        }
      } else if (groupData[roundMap[3]]) {
      } else {
      }

      setUserInput("");

      const nextRound = currentRound + 1;

      if (roundMap[nextRound] && groupData[roundMap[nextRound]]) {
        setCurrentRound(nextRound);
      } else {
        setIsFinalInputStage(true);
        setTimeout(() => {
          const firstEmptyIndex = finalAnswerState.findIndex(
            (val) => val === ""
          );
          if (firstEmptyIndex !== -1) {
            inputRefs.current[firstEmptyIndex]?.focus();
          }
        }, 100);
      }
    } else {
      setIsRoundWrong(true);
    }

    setTimeout(() => {
      setIsRoundCorrect(false);
      setIsRoundWrong(false);
      setUserInput("");
    }, 1000);
  };

  const handleFinalInputChange = (e, index) => {
    const { value } = e.target;
    if (value.length > 1) return;
    if (isFinalAnswerWrong) setIsFinalAnswerWrong(false);

    const newAnswer = [...finalAnswerState];
    newAnswer[index] = value.toUpperCase();
    setFinalAnswerState(newAnswer);

    const finalWord = newAnswer.join("");
    if (finalWord.length === groupName.length && !newAnswer.includes("")) {
      if (finalWord === groupName.toUpperCase()) {
        setIsGameWon(true);
      } else {
        setIsFinalAnswerWrong(true);
        setTimeout(() => setIsFinalAnswerWrong(false), 1500);
      }
    }

    if (value) {
      let nextIndex = index + 1;
      const clueIndices = Object.values(groupData)
        .filter((v) => v.letter_position)
        .map((d) => d.letter_position - 1);
      while (
        nextIndex < finalAnswerState.length &&
        clueIndices.includes(nextIndex)
      ) {
        nextIndex++;
      }
      if (nextIndex < finalAnswerState.length) {
        inputRefs.current[nextIndex]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !finalAnswerState[index]) {
      let prevIndex = index - 1;
      const clueIndices = Object.values(groupData)
        .filter((v) => v.letter_position)
        .map((d) => d.letter_position - 1);
      while (prevIndex >= 0 && clueIndices.includes(prevIndex)) {
        prevIndex--;
      }
      if (prevIndex >= 0) {
        inputRefs.current[prevIndex]?.focus();
      }
    }
  };

  const getFinalInputBoxStyle = () => {
    if (isGameWon) return "bg-green-500 text-white";
    if (isFinalAnswerWrong) return "bg-red-500 text-white";
    if (isRoundCorrect) return "bg-green-500/50 text-white";
    if (isRoundWrong) return "bg-red-500/50 text-white";
    return "bg-gray-600 text-white";
  };

  return (
    <div className="relative max-w-md md:max-w-xl lg:max-w-4xl h-full mx-auto flex center justify-center items-center p-4">
      <img src="/Images/TV.png" alt="TV" className="mt-22 relative" />
      <h1
        style={{ fontFamily: "Anton" }}
        className="font-bold text-5xl absolute top-[27%] text-[#111111] text-center"
      >
        Insert the Answer
      </h1>

      <div className="absolute top-[35%] w-full">
        {/* MODIFIED: This <p> now permanently displays the collected letters */}
        <p className={"text-center mt-6 mb-4 text-xl font-bold h-6"}>
          <span className="text-white tracking-[.2em]">
            {permanentLetters.join(" ")}
          </span>
        </p>

        <div className="flex gap-2 my-3 justify-center">
          {finalAnswerState.map((letter, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="text"
              maxLength="1"
              value={letter}
              onChange={(e) => handleFinalInputChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              disabled={!isFinalInputStage || isGameWon}
              className={`w-10 h-12 rounded-md focus:border-0 text-2xl font-bold text-center transition-all duration-300 ${getFinalInputBoxStyle()} ${
                !isFinalInputStage && !isGameWon
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            />
          ))}
        </div>

        {!isFinalInputStage && !isGameWon && (
          <form
            onSubmit={handleAnswerSubmit}
            className="absolute flex items-center justify-center w-full -bottom-[60%]"
          >
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className={`bg-transparent border-b-2 text-white text-center text-2xl focus:outline-none placeholder-white font-[Anton] transition-all duration-300 ${
                isRoundCorrect ? "border-green-400" : "border-white"
              }`}
              maxLength={15}
              autoFocus
            />
          </form>
        )}
      </div>

      {!isFinalInputStage && !isGameWon && (
        <div
          className="text-3xl bottom-[34.5%] left-[28%] font-bold absolute text-[#111111]"
          style={{ fontFamily: "Anton" }}
        >
          ROUND {currentRound}
        </div>
      )}

      <div
        style={{ fontFamily: "Anton" }}
        className="absolute left-[25%] bottom-[27%] text-white px-6 py-2 mt-2 text-4xl"
      >
        GUESS THE MOVE
      </div>
    </div>
  );
}

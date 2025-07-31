"use-client";
import { React, useState, useEffect, useRef } from "react";
import Groups from "../Groups/Groups.json";
import BackButton from "../BackButton";

function CongratsModal({ groupName, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 99999,
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full flex flex-col items-center animate-bounce-in">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-orange-500 mb-3" style={{ fontFamily: "Anton" }}>CONGRATULATION</h2>
        <div className="text-lg text-center text-gray-800 font-bold mb-1" style={{ fontFamily: "Anton" }}>
          YOUR TEAM NAME IS
        </div>
        <div className="text-3xl lg:text-4xl text-center font-extrabold mb-6 text-green-600 tracking-widest" style={{ fontFamily: "Anton" }}>
          {groupName.toUpperCase()}
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full text-lg w-full transition-all"
          onClick={onClose}
        >
          Back to Home
        </button>
      </div>
      <style jsx>{`
        @keyframes bounce-in {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(.34,1.56,.64,1) both;
        }
      `}</style>
    </div>
  );
}

export default function Play({ groupCode, onPrev }) {
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

      //koding sebelumnya
      // if (groupData[roundMap[3]] && groupData[roundMap[4]]) {
      //   if (currentRound === 3 || currentRound === 4) {
      //     if (letter && !permanentLetters.includes(letter.toUpperCase())) {
      //       setPermanentLetters((prev) => [...prev, letter.toUpperCase()]);
      //     }
      //   }
      // }

      //setelah di ubah
      if ((currentRound === 3 || currentRound === 4) && letter) {
        if (!permanentLetters.includes(letter.toUpperCase())) {
          setPermanentLetters((prev) => [...prev, letter.toUpperCase()]);
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

  const handleBackToHome = () => {
    window.location.hash = "#home";
  };

  return (
    <div className="relative max-w-md md:max-w-xl lg:max-w-6xl h-full mx-auto flex center justify-center items-center p-4">
      <img src="/Images/TV.png" alt="TV" className="lg:mt-22 relative w-full h-full" />
      <BackButton onPrev={onPrev} className="absolute left-[15%] top-[18%] lg:top-[27.5%]" />
      <h1
        style={{ fontFamily: "Anton" }}
        className="font-bold text-xl lg:text-5xl absolute top-[18%] lg:top-[27%] text-[#111111] text-center"
      >
        Insert the Answer
      </h1>

      <div className="absolute lg:top-[32%] top-[13%] w-full">
        {/* MODIFIED: This <p> now permanently displays the collected letters */}
        <p className={"text-center mt-12 lg:mt-6 mb-2 lg:mb-6 lg:text-xl text-sm font-bold h-4"}>
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
              className={`w-6 lg:w-10 h-6 lg:h-12 rounded-md focus:border-0 lg:text-2xl text-md font-bold text-center transition-all duration-300 ${getFinalInputBoxStyle()} ${!isFinalInputStage && !isGameWon
                ? "opacity-50 cursor-not-allowed"
                : ""
                }`}
            />
          ))}
        </div>

        {!isFinalInputStage && !isGameWon && (
          <form
            onSubmit={handleAnswerSubmit}
            className="absolute flex items-center justify-center w-full -bottom-[20%] lg:-bottom-[60%]"
          >
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className={`bg-transparent border-b-2 text-white text-center text-md lg:text-2xl focus:outline-none placeholder-white font-[Anton] transition-all duration-300 ${isRoundCorrect ? "border-green-400" : "border-white"
                }`}
              maxLength={15}
              autoFocus
            />
          </form>
        )}
      </div>

      {!isFinalInputStage && !isGameWon && (
        <div
          className="text-lg lg:text-3xl bottom-[37%] lg:bottom-[34.5%] left-[28%] font-bold absolute text-[#111111]"
          style={{ fontFamily: "Anton" }}
        >
          ROUND {currentRound}
        </div>
      )}

      <div
        style={{ fontFamily: "Anton" }}
        className="absolute left-[25%] bottom-[27.5%] lg:bottom-[26%] text-white px-6 py-2 mt-2 text-lg lg:text-4xl"
      >
        GUESS THE MOVE
      </div>
      {isGameWon && (
        <CongratsModal groupName={groupName} onClose={handleBackToHome} />
      )}
    </div>
  );
}

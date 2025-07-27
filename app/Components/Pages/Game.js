import React, { useState } from "react";
import Background from "../Background";
import Storyline from "../Games/Storyline";
import Envelope from "../Games/Envelope";
import Play from "../Games/Play";

export default function Game() {
  const [phase, setPhase] = useState("storyline");
  const [code, setCode] = useState("");

  return (
    <Background textChild="GAME">
      <div className="w-full flex h-screen justify-center items-center">
        {phase === "storyline" && (
          <Storyline onNext={() => setPhase("envelope")} />
        )}
        {phase === "envelope" && (
          <Envelope
            onNext={(correctCode) => {
              setPhase("play");
              setCode(correctCode);
            }}
            onPrev={() => {
              setPhase("storyline");
            }}
          />
        )}
        {phase === "play" && (
          <Play
            onPrev={() => {
              setPhase("envelope");
            }}
            groupCode={code}
          />
        )}
      </div>
    </Background>
  );
}

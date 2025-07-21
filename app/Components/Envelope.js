"use-client";
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

export default function Envelope({ groups, unique_codes }) {
  const [sceneUrl, setSceneUrl] = useState(
    "https://prod.spline.design/QwCKxSuek9YolkQb/scene.splinecode"
  );
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
    } else {
      setSceneUrl(
        "https://prod.spline.design/RRF-H-e5ZfciGKxs/scene.splinecode"
      );
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <Spline scene={sceneUrl} />
    </div>
  );
}

import React, { useRef } from "react";
import { useInterval, useSetState, useWindowSize } from "react-use";

function getRandomInt(min = 1, max = 10, random = Math.random()) {
  return Math.floor(random * (max - min + 1) + min);
}

function getCurveSkew(value: number, amount = 0) {
  const nextAmount = amount;
  return [value + nextAmount, value - nextAmount];
}

function generateCircle(amount = 5) {
  const leftCurvePoint = "57.307552";
  const rightCurvePoint = "198.692448";
  const [bf, bb] = getCurveSkew(256, amount + getRandomInt(-3, 3));
  const [rf, rb] = getCurveSkew(256, amount + getRandomInt(-3, 3));
  const [tf, tb] = getCurveSkew(0, amount + getRandomInt(-3, 3));
  const [lf, lb] = getCurveSkew(0, amount + getRandomInt(-3, 3));

  const quarters = {
    bottom: `M128,256`,
    bottomForward: `C${rightCurvePoint},${bf}`,
    rightBackward: `${rb},${rightCurvePoint}`,
    right: `256,128`,
    rightForward: `C${rf},${leftCurvePoint}`,
    topBackward: `${rightCurvePoint},${tb}`,
    top: `128,0`,
    topForward: `C${leftCurvePoint},${tf}`,
    leftBackward: `${lb},${leftCurvePoint}`,
    left: `0,128`,
    leftForward: `C${lf},${rightCurvePoint}`,
    bottomBackward: `${leftCurvePoint},${bb}`,
    lastPath: `128,256`,
    close: `Z`
  };

  return Object.values(quarters).join(" ");
}

export default function Circle() {
  const [animation, setAnimation] = useSetState({
    amount: 0,
    direction: "forward"
  });
  const circle = useRef(generateCircle(animation.amount));
  const { width, height } = useWindowSize();

  useInterval(() => {
    const { amount, direction } = animation;
    const limit = 30;

    if (amount) {
      circle.current = generateCircle(amount);
    }

    const nextAmount = amount + (direction === "forward" ? 1 : -1);
    let nextDirection = amount > limit ? "reverse" : direction;

    if (amount < -limit) {
      nextDirection = "forward";
    }

    setAnimation({ amount: nextAmount, direction: nextDirection });
  }, 50);

  return (
    <svg
      width={`${width * 0.6}px`}
      height={`${height * 0.6}px`}
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      style={{
        left: "50%",
        margin: 20,
        overflow: "visible",
        position: "absolute",
        top: "48%",
        transform: "translate(-50%, -50%)",
        zIndex: -1
      }}
    >
      <path
        d={circle.current}
        fill="#ff0044"
        style={{
          transition: "d 0.5s"
        }}
      />
    </svg>
  );
}

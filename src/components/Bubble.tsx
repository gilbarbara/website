import { CSSProperties, useRef } from 'react';
import { useInterval, useSetState } from 'react-use';

import { primaryColor } from 'modules/theme';

interface Props {
  size: number;
  style?: CSSProperties;
}

function getRandomInt(min = -3, max = 3, random = Math.random()) {
  return Math.floor(random * (max - min + 1) + min);
}

function getCurveSkew(value: number, amount = 0) {
  const nextAmount = amount;

  return [value + nextAmount, value - nextAmount];
}

function generateCircle(amount = 5) {
  const leftCurvePoint = '57.307552';
  const rightCurvePoint = '198.692448';
  const [bf, bb] = getCurveSkew(256, amount + getRandomInt());
  const [rf, rb] = getCurveSkew(256, amount + getRandomInt());
  const [tf, tb] = getCurveSkew(0, amount + getRandomInt());
  const [lf, lb] = getCurveSkew(0, amount + getRandomInt());

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
    close: `Z`,
  };

  return Object.values(quarters).join(' ');
}

export default function Bubble({ size, style }: Props) {
  const [animation, setAnimation] = useSetState({
    amount: 0,
    direction: 'forward',
  });
  const circle = useRef(generateCircle(animation.amount));
  const space = 8;

  useInterval(() => {
    const { amount, direction } = animation;
    const limit = 30;

    if (amount) {
      circle.current = generateCircle(amount);
    }

    const nextAmount = amount + (direction === 'forward' ? 1 : -1);
    let nextDirection = amount > limit ? 'reverse' : direction;

    if (amount < -limit) {
      nextDirection = 'forward';
    }

    setAnimation({ amount: nextAmount, direction: nextDirection });
  }, 50);

  return (
    <svg
      height={size - space}
      preserveAspectRatio="xMidYMid"
      style={{
        left: 0,
        margin: 4,
        overflow: 'visible',
        position: 'absolute',
        top: 0,
        zIndex: -1,
        ...style,
      }}
      version="1.1"
      viewBox="0 0 256 256"
      width={size - space}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={circle.current}
        fill={primaryColor}
        style={{
          transition: 'd 0.5s',
        }}
      />
    </svg>
  );
}

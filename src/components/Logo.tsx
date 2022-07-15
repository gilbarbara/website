import { BoxCenter } from '@gilbarbara/components';

import Bubble from './Bubble';

interface Props {
  color?: string;
  size?: number;
}

export default function Logo(props: Props): JSX.Element {
  const { color = '#fff', size = 60 } = props;
  const ratio = 214 / 512;

  return (
    <BoxCenter data-component-name="Logo" height={size} position="relative" width={size}>
      <Bubble size={size} />
      <svg
        height={size * ratio}
        version="1.1"
        viewBox="0 0 512 214"
        width={size * ratio}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M176.561888,155.33909 L136.17962,213.112263 L0,213.112263 L0,3.24237191 L76.6378814,3.24237191 L176.561888,155.33909 Z M115.251583,160.64479 L50.9936672,63.0788716 L50.9936672,160.64479 L115.251583,160.64479 Z M301.540587,213.112263 L221.365573,213.112263 L189.236615,172.729994 L189.236615,3.24237191 L301.540587,3.24237191 L301.540587,55.7098446 L240.230282,55.7098446 L240.230282,77.2274036 L301.540587,77.2274036 L301.540587,122.031088 L240.230282,122.031088 L240.230282,160.64479 L301.540587,160.64479 L301.540587,213.112263 Z M512,35.666091 L414.728843,213.112263 L407.065055,213.112263 L310.972942,35.666091 L352.829016,-2.84217094e-14 L411.19171,115.546344 L470.438687,-2.84217094e-14 L512,35.666091 Z"
            fill={color}
          />
        </g>
      </svg>
    </BoxCenter>
  );
}

import Bubble from './Bubble';

interface LogoProps {
  size?: number;
}

export default function Logo(props: LogoProps) {
  const { size = 48 } = props;

  return (
    <span className="inline-flex items-center justify-center relative size-12">
      <Bubble size={size} />
      <span className="text-sm text-foreground font-bold">GB</span>
    </span>
  );
}

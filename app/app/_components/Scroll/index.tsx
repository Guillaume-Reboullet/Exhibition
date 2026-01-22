import "./style.css";
import Image from "next/image";

interface ScrollProps {
  onClick?: () => void;
}

export default function Scroll({ onClick }: ScrollProps) {
  return (
    <button
      onClick={onClick}
      className="scroll-indicator absolute left-1/2 -translate-x-1/2 bottom-(--spacing-section) cursor-pointer"
    >
      <Image
        src="/arrow_scroll.svg"
        alt="Scroll down"
        width={35}
        height={44}
        className="arrow"
      />
    </button>
  );
}

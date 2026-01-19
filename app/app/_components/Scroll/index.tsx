import "./scroll.css";
import Image from "next/image";

export default function Scroll() {
  return (
    <div className="scroll-indicator absolute left-1/2 -translate-x-1/2  bottom-(--spacing-major)">
      <Image
        src="/arrow_scroll.svg"
        alt="Scroll down"
        width={35}
        height={44}
        className="arrow"
      />
    </div>
  );
}

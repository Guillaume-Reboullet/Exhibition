import Loader from "../Loader";
import Scroll from "../Scroll";

interface SplashScreenProps {
  name: string;
  tagline: string;
  inspiration: string;
  isExiting?: boolean;
  onScrollClick?: () => void;
}

export default function SplashScreen({
  name,
  tagline,
  inspiration,
  isExiting = false,
  onScrollClick,
}: SplashScreenProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-800 ease-in-out ${
        isExiting ? "-translate-y-full" : ""
      }`}
    >
      <div className="flex min-h-screen flex-col items-center justify-center bg-frost">
        <div className="flex flex-col items-center gap-(--spacing-related) text-center">
          <h1 className="px-(--spacing-default)">
            {name}
          </h1>
          <div className="flex flex-col items-center gap-(--spacing-micro) text-center">
            <p className="font-serif text-base/[25px] italic text-lavender">{tagline}</p>
            <p className="font-serif text-base/[25px] italic text-lavender">{inspiration}</p>
          </div>
        </div>
        <Loader />
        <Scroll onClick={onScrollClick} />
      </div>
    </div>
  );
}

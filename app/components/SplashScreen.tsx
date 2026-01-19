import Loader from "./Loader";

interface SplashScreenProps {
  name: string;
  tagline: string;
  inspiration: string;
}

export default function SplashScreen({
  name,
  tagline,
  inspiration,
}: SplashScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-frost">
      <div className="flex flex-col items-center gap-(--spacing-related) text-center">
        <h1 className="text-5xl font-bold tracking-tight text-prussian md:text-6xl">
          {name}
        </h1>
        <div className="flex flex-col items-center gap-(--spacing-micro) text-center">
          <p className="font-serif text-lg italic text-lavender">{tagline}</p>
          <p className="font-serif text-lg italic text-lavender">{inspiration}</p>
        </div>
        <Loader />
      </div>
    </div>
  );
}

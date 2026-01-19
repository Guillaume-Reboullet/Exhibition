import Loader from "./_components/Loader";
import Scroll from "./_components/Scroll";
import SplashScreen from "./_components/SplashScreen";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <SplashScreen
        name="Guillaume Reboullet"
        tagline="Minimaliste · Sophistiqué"
        inspiration="Inspiré par Area17 x macOS Tahoe"
      />
      <Loader />
      <Scroll />
    </div>
  );
}

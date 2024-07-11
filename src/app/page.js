import Image from "next/image";
import MainHeader from "./components/MainHeader";
import LandingBackground from "./components/LandingBackground";

export default function Home() {
  return (
    <main className="max-w-screen-maximum-width w-full bg-black flex flex-col">
      <MainHeader/>
      <LandingBackground/>
    </main>
  );
}

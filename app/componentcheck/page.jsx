'use client';

import AnimatedCard from "../Components/AnimatedCard";
import ButtonAnimated from "../Components/ButtonAnimated";
import TiltShineCard from "../Components/TiltShineCard";


export default function Home() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="p-4">
     Component Checker
      <div className="mt-10 ml-10">
        <ButtonAnimated  content="Get Started"/>
      </div>
    <AnimatedCard/>

    <div className="border-animation">
      lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>


    <div className="w-7xl flex justify-center border-animation">
      <TiltShineCard/>
    </div>











    </div>
  );
}
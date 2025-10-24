'use client';

import ButtonAnimated from "./Components/ButtonAnimated";
import Counter from "./Components/Counter";

export default function Home() {

  return (
    <div className="p-4 home-page pt-16">
     {/* hero section start */}

      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-8 py-20 px-4 font-mont">
        {/* heading and slogan section */}
        <div className="flex flex-col justify-center items-center gap-3 ">
          <h2 className="text-7xl font-bold"> Finance That Runs Itself </h2>
          <h2 className="text-3xl font-bold">Collect Cash | Pay Vendors | Close Faster</h2>
          <p className="text-2xl font-medium mt-4">Payradoo orchestrates AR & AP end to end inside your ERP</p>
        </div>
        {/* heading and slogan section  end*/}

        {/*action button*/}
        <ButtonAnimated content="Get Your Savings Report" />
        {/*action button end*/}

        <Counter />
      </div>

      <div>
        
      </div>


      {/* hero section end */}


    </div>
  );
}
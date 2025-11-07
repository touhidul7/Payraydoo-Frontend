import Image from "next/image";
import shapeSmall from '../../../public/logo/Shape 1.png';
import logo from "../../../public/logo/logo-open-fileArtboard-5.png";
import shapeLarge from '../../../public/logo/Shape 2.png';
import leftShape from '../../../public/logo/Shape 3.png'
import firstStats from '../../../public/logo/stats 1.png';
import bigDash from '../../../public/images/4.png';
import smallDash from '../../../public/images/3.png';

export default function AP() {
  return (
    <div className="font-mont bg-white">
      {/* hero section */}
      <div className="max-w-[98%] mx-auto product-hero-bg rounded-3xl  my-5">
        {/* shape and logo */}
        <div className="flex justify-between items-start">
          <Image src={logo} alt="Open File Logo" width={300} height={200} />
          <div className="flex justify-center items-start pt-6">
            <Image src={shapeSmall} alt="small shape " width={100} height={100} />
            <Image src={shapeLarge} alt="small shape " width={200} height={400} />
          </div>
        </div>
        {/* hero text */}
        <div className="mt-[-120px] flex flex-col justify-center items-center gap-10 pb-32">
          <h2 className="text-center text-6xl font-semibold text-white leading-18 px-42">
            Best Tool In The Market For
            Processing AP Invoices
          </h2>
          <button className="custom-button-light">
            Get In Touch
          </button>
        </div>
        {/* stats section */}
        <div className="flex justify-between items-center">
          <div>
            <Image src={leftShape} alt="left shape" width={150} height={200} />
          </div>
          {/* stats & dashboard images */}
          <div className="flex justify-center ">
            <div className="mr-[-150px] mt-[-50px] z-10">
              <Image src={firstStats} alt="stats image" width={400} height={200} />
            </div>
            <div className="rounded-2xl" >
              <Image src={bigDash} alt="big dashboard" width={800} height={600} />
            </div>
            <div >
              <Image src={smallDash} alt="small dashboard" width={400} height={400} className="ml-[-150px] shadow-lg shadow-gray-600  mt-12 rounded-3xl" />
            </div>
          </div>

        </div>

      </div>

      {/* product details section */}
      <div className="max-w-[98%] mx-auto my-5 bg-[#f7f9fc] rounded-3xl py-22">
        {/* heading section */}
        <div className="flex flex-col justify-center items-center gap-6 px-10 py-14">
          <h2 className="text-center text-5xl text-gray-600 font-semibold">
            Why automate your <span className="gradient-text">AP invoice</span> processing?
          </h2>
          <h3 className="text-2xl text-gray-600 font-normal px-62 text-center">
            Free your AP teams from mundane processes to focus on strategic
            initiatives and better vendor relationships
          </h3>
        </div>
        {/* details card section */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl p-10">
          
        </div>
      </div>
    </div>
  );
}
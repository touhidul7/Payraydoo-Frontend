import Image from "next/image";
import React from "react";
import logoimg from "../../public/logo/logo-open-fileArtboard-5.png";

export default function Header() {
  const Menus = [
    { title: "Home", link: "/" },
    { title: "Product", link: "/product" },
    { title: "Blog", link: "/blog" },
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "/contact" },
  ];
  return (
    <div>
      <header className="bg-[#363767]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
             <Image src={logoimg} alt="" width={250}
      height={100}/>
            </div>

            <div className="md:flex md:items-center md:gap-12 font-mont font-semibold">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-12 text-md">
                  {Menus.map((menu, index) => (
                    <li key={index}>
                      <a
                        className="text-white  nav-text"
                        href={menu.link}
                      >
                        {" "}{menu.title}{" "}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

   
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

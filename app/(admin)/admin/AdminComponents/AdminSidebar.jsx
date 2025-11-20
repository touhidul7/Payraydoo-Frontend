"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  ChevronDownIcon,
} from "../../../Icons/index";

import { useAdminData } from "../adminContext/AdminContext";
import { BookImage, House, LayoutDashboard, LogOut, PhoneCall, ShoppingCart, UsersRound } from "lucide-react";

const iconSize = 20;

const NavItems = [
  {
    icon: <LayoutDashboard size={iconSize} />,
    name: "Dashboard",
    path: "/admin",
  },
  {
    icon: <House size={iconSize}/>,
    name: "Home",
    path: "/admin/home",
  },
  {
    icon: <ShoppingCart size={iconSize}/>,
    name: "Product",
    subItems :[
      {name: "Product AP",path: "/admin/product-ap"},
      {name: "Product AR",path: "/admin/product-ar"},
    ],
  },
  {
    icon: <BookImage size={iconSize}/>,
    name: "Blog",
    path: "/admin/blog",
  },
  {
    icon: <UsersRound size={iconSize}/>,
    name: "About Us",
    path: "/admin/about",
  },
  {
    icon: <PhoneCall size={iconSize}/>,
    name: "Contact Us",
    path: "/admin/contact-us",
  },
];

// const OtherNavItems = [
//   {
//     icon: PieChartIcon,
//     name: "Charts",
//     subItems: [
//       { name: "Line Chart", path: "/line-chart" },
//       { name: "Bar Chart", path: "/bar-chart" },
//     ],
//   },
//   {
//     icon: BoxCubeIcon,
//     name: "UI Elements",
//     subItems: [
//       { name: "Alerts", path: "/alerts" },
//       { name: "Avatar", path: "/avatars" },
//       { name: "Badge", path: "/badge" },
//       { name: "Buttons", path: "/buttons" },
//       { name: "Images", path: "/images" },
//       { name: "Videos", path: "/videos" },
//     ],
//   },
// ];

const AdminSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } =
    useAdminData();
  const pathname = usePathname();

  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [submenuHeight, setSubmenuHeight] = useState({});
  const submenuRefs = useRef({});

  const isActive = useCallback((path) => path === pathname, [pathname]);

  const handleToggle = (index, type) => {
    setOpenSubmenu((prev) =>
      prev && prev.index === index && prev.type === type
        ? null
        : { index, type }
    );
  };

  const RenderMenu = (items, type) => (
    <ul className="flex flex-col gap-4">
      {items.map((item, index) => (
        <li key={item.name}>
          {item.subItems ? (
            <button
              onClick={() => handleToggle(index, type)}
              className={`menu-item`}
            >
             
              {item.icon}
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="menu-item-text">{item.name}</span>
              )}

              {(isExpanded || isHovered || isMobileOpen) && (
                <Image
                  src={ChevronDownIcon}
                  alt="toggle"
                  width={16}
                  height={16}
                  className={`ml-auto transition-transform ${
                    openSubmenu?.index === index && openSubmenu?.type === type
                      ? "rotate-180"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            item.path && (
              <Link
                href={item.path}
                className={`menu-item ${
                  isActive(item.path)
                    ? "menu-item-active"
                    : "menu-item-inactive"
                }`}
              >
                {item.icon}
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{item.name}</span>
                )}
              </Link>
            )
          )}

          {item.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                submenuRefs.current[`${type}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.index === index && openSubmenu?.type === type
                    ? submenuHeight[`${type}-${index}`]
                    : 0,
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {item.subItems.map((sub) => (
                  <li key={sub.name}>
                    <Link
                      href={sub.path}
                      className={`menu-dropdown-item ${
                        isActive(sub.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
      {/* <li>
        <button onClick={handleLogout} className={`menu-item `}>
          <LogOut />
          Logout
        </button>
      </li> */}
    </ul>
  );

  useEffect(() => {
    if (openSubmenu) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      const el = submenuRefs.current[key];
      if (el) {
        setSubmenuHeight((prev) => ({
          ...prev,
          [key]: el.scrollHeight,
        }));
      }
    }
  }, [openSubmenu]);

  return (
    <aside
      className={`fixed mt-16 bg-white text-gray-900 h-screen transition-all z-50 border-r 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <nav className="my-6">
        {/* <h2 className="mb-4 text-xs text-gray-400 uppercase">
          {isExpanded || isHovered || isMobileOpen ? (
            "Menu"
          ) : (
            <Image src={HorizontaLDots} alt="..." width={20} height={20} />
          )}
        </h2> */}
        {RenderMenu(NavItems, "main")}
      </nav>
    </aside>
  );
};

export default AdminSidebar;

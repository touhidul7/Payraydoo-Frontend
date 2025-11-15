"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import AdminSidebar from "../AdminComponents/AdminSidebar";
import AdminHeader from "../AdminComponents/AdminHeader";

/* Create Context */
const AdminContext = createContext();
export const useAdminData = () => useContext(AdminContext);

export const AdminDataProvider = ({ children }) => {


  /* =======================
      Admin App Data
  ======================== */
  const VITE_SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;
  const testdata = "Hello from merged Admin context!";


  /* ==============
      Logout function
  =============== */


  const handleLogout = () => {
    document.cookie = "user=; path=/; max-age=0"; // delete cookie
    window.location.href = "/login"; // redirect to login
  };














  /* =======================
      Sidebar States
  ======================== */
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  /* =======================
      Detect Mobile
  ======================== */
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) {
        setIsMobileOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* =======================
      Sidebar Actions
  ======================== */
  const toggleSidebar = () => setIsExpanded((prev) => !prev);
  const toggleMobileSidebar = () => setIsMobileOpen((prev) => !prev);

  const toggleSubmenu = (item) => {
    setOpenSubmenu((prev) => (prev === item ? null : item));
  };

  /* =======================
      Combine All Context Data
  ======================== */
  const value = {
    // Admin Data
    testdata,
    VITE_SERVER_API,

    // Sidebar Controls
    isExpanded: isMobile ? false : isExpanded,
    isMobileOpen,
    isHovered,
    activeItem,
    openSubmenu,

    toggleSidebar,
    toggleMobileSidebar,
    setIsHovered,
    setActiveItem,
    toggleSubmenu,
    //user Actions
    handleLogout,
  };

  return (
    <AdminContext.Provider value={value}>
      <AdminHeader />
      <AdminSidebar />
      <div className="pl-80 pt-20">{children}</div>
    </AdminContext.Provider>
  );
};
export default AdminContext;
"use client";
import { usePathname } from "next/navigation";
import Header from "../components/Navbar/Header";

const NavbarWrapper = ({ children }) => {
  const pathname = usePathname();

  // hide navbar on auth pages
  const hideNavbar =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/sessions");

  return (
    <div className="relative">
      {!hideNavbar && <Header />}
      {children}
    </div>
  );
};

export default NavbarWrapper;

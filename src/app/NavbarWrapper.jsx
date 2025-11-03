"use client";
import { usePathname } from "next/navigation";
import Header from "../components/Navbar/navbar";

const NavbarWrapper = ({ children }) => {
  const pathname = usePathname();

  // hide navbar on auth pages
  const hideNavbar =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  return (
    <div className="relative h-screen">
      {!hideNavbar && <Header />}
      {children}
    </div>
  );
};

export default NavbarWrapper;

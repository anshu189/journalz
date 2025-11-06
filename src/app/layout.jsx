"use client";

import "../styles/index.css";
import clsx from "clsx";
import { HeroProviders } from "./Heroproviders";
import NavbarWrapper from "./NavbarWrapper";
import { Provider } from "react-redux";
import appstore from "../store/appstore";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("min-h-screen dark-mode font-sans antialiased")}>
        <Provider store={appstore}>
          <HeroProviders>
            <NavbarWrapper>
              <div className="relative h-screen">{children}</div>
            </NavbarWrapper>
          </HeroProviders>
        </Provider>
      </body>
    </html>
  );
}

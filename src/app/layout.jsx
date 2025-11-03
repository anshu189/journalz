import "../styles/index.css";
import clsx from "clsx";
import { HeroProviders } from "./Heroproviders";
import NavbarWrapper from "./NavbarWrapper";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("min-h-screen dark-mode font-sans antialiased")}>
        <HeroProviders>
          <NavbarWrapper>
            <div className="relative h-screen">{children}</div>
          </NavbarWrapper>
        </HeroProviders>
      </body>
    </html>
  );
}

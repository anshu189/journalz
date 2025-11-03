import "../styles/index.scss";
import "../styles/index.css";
import clsx from "clsx";
import { HeroProviders } from "./Heroproviders";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx("min-h-screen dark-mode font-sans antialiased")}>
        <HeroProviders>
          <div className="relative h-screen">{children}</div>
        </HeroProviders>
      </body>
    </html>
  );
}

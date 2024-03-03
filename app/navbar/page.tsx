import Image from "next/image";
import Logo from "./logo";
import { NavigationBar } from "./navigation-bar";
import ActionButtons from "./action-buttons";
import { ModeToggle } from "@/components/darkmode-toggler";
export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-10 border-b fixed w-full bg-white dark:bg-black z-50">
      <Logo />
      <NavigationBar />
      <div className="flex items-center justify-between">
        <ModeToggle />
        <ActionButtons />
      </div>
    </header>
  );
}

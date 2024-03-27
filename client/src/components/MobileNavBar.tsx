import { useEffect, useState } from "react";
import HamburgerButton from "./HamburgerButton";
import NavLinks from "./NavLinks";
import WordMark from "./WordMark";
import NotificationIcon from "../assets/icons/NotificationIcon";

function MobileNavBar() {
  const [isLinkActive, setIsLinkActive] = useState(false);
  function toggleIsLinkActive() {
    setIsLinkActive((isLinkActive) => !isLinkActive);
  }
  function toggleIsLinkActiveScroll() {
    if (isLinkActive) {
      toggleIsLinkActive();
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", toggleIsLinkActiveScroll);
    return () => {
      window.removeEventListener("scroll", toggleIsLinkActiveScroll);
    };
  });

  return (
    <div className="flex justify-center sm:hidden sticky top-0 overflow-hidden z-10 bg-white">
      <nav
        className={`flex p-4 flex-col max-w-7xl w-full transition-all gap-4 duration-300 ${
          isLinkActive ? "h-[100px]" : "h-[60px]"
        }`}
      >
        <div className="flex gap-5 items-center w-full justify-between">
          <WordMark />
          <div className="flex gap-4">
            <div className="flex gap-3 items-center">
              <NotificationIcon />
            </div>
            <HamburgerButton onClick={toggleIsLinkActive} />
          </div>
        </div>
        <NavLinks />
      </nav>
    </div>
  );
}

export default MobileNavBar;

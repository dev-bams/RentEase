import WordMark from "./WordMark";
import ProfileIcon from "../assets/icons/ProfileIcon";
import NotificationIcon from "../assets/icons/NotificationIcon";
function NavBar() {
  return (
    <div className="sticky top-0 flex justify-center bg-white max-sm:hidden  z-10">
      <nav className="justify-between items-center flex p-4 max-w-screen-xl w-full">
        <WordMark />
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-4">
            <NotificationIcon />
            <ProfileIcon />
          </div>
          <div>
            <button className="bg-first-primary hover:bg-first-primary-light transition-all duration-150 p-2 text-white rounded-md">
              LawyerAI
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

import DarkModeButton from "./DarkModeButton";

const Header = () => {
     return (
          <header className="flex justify-between w-full items-center max-w-7xl justify-center mx-auto py-6">
               <span>WEBSITE NAME</span>
               <DarkModeButton />
          </header>
     );
};

export default Header;

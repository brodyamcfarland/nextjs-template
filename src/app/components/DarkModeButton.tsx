"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";

const DarkModeButton = () => {
     const [mounted, setMounted] = useState(false);
     const { theme, setTheme } = useTheme();

     useEffect(() => {
          setMounted(true);
     }, []);

     if (!mounted) {
          return null;
     }

     return (
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
               {theme === "dark" ? (
                    <TbSunFilled
                         size={25}
                         className="opacity-70 hover:opacity-100 duration-300 md:hover:animate-[spin_3s_ease-in-out_infinite]"
                         title="Light Mode"
                    />
               ) : (
                    <TbMoonFilled
                         size={25}
                         className="opacity-70 hover:opacity-100 duration-300 md:hover:animate-[spin_3s_ease-in-out_infinite]"
                         title="Dark Mode"
                    />
               )}
          </button>
     );
};

export default DarkModeButton;

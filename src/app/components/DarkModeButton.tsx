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
                    <TbSunFilled size={25} />
               ) : (
                    <TbMoonFilled size={25} />
               )}
          </button>
     );
};

export default DarkModeButton;

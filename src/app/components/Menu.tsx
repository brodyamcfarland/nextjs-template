import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface MenuProps {
     setShowMenu: Dispatch<SetStateAction<boolean>>;
     menuButtonRef: React.RefObject<HTMLButtonElement>;
}

const Menu = ({ setShowMenu, menuButtonRef }: MenuProps) => {
     const menuRef = useRef<HTMLElement>(null);

     useEffect(() => {
          const handleOutsideClick = (event: MouseEvent) => {
               if (
                    menuButtonRef.current &&
                    menuButtonRef.current.contains(event.target as Node)
               ) {
                    return;
               }

               if (
                    menuRef.current &&
                    !menuRef.current.contains(event.target as Node)
               ) {
                    setShowMenu(false);
               }
          };

          document.addEventListener("mousedown", handleOutsideClick);

          return () => {
               document.removeEventListener("mousedown", handleOutsideClick);
          };
     }, [setShowMenu, menuButtonRef]);

     return (
          <nav
               ref={menuRef}
               className="absolute flex flex-col gap-4 z-20 dark:bg-white/10 bg-black/40 backdrop-blur-sm shadow-md w-32 top-[76px] right-6 p-4 rounded-lg text-sm items-center justify-center"
          >
               <Link
                    href={"/"}
                    className="shadow-md w-full text-center rounded-lg dark:bg-black/80 bg-white dark:border border-2 border-transparent dark:hover:border-white/50 hover:border-black duration-150 py-1"
               >
                    Home
               </Link>
               <Link
                    href={"/"}
                    className="shadow-md w-full text-center rounded-lg dark:bg-black/80 bg-white dark:border border-2 border-transparent dark:hover:border-white/50 hover:border-black duration-150 py-1"
               >
                    Link 1
               </Link>
               <Link
                    href={"/"}
                    className="shadow-md w-full text-center rounded-lg dark:bg-black/80 bg-white dark:border border-2 border-transparent dark:hover:border-white/50 hover:border-black duration-150 py-1"
               >
                    Link 2
               </Link>
               <Link
                    href={"/"}
                    className="shadow-md w-full text-center rounded-lg dark:bg-black/80 bg-white dark:border border-2 border-transparent dark:hover:border-white/50 hover:border-black duration-150 py-1"
               >
                    Link 3
               </Link>
               <Link
                    href={"/"}
                    className="shadow-md w-full text-center rounded-lg dark:bg-black/80 bg-white dark:border border-2 border-transparent dark:hover:border-white/50 hover:border-black duration-150 py-1"
               >
                    Link 4
               </Link>
          </nav>
     );
};

export default Menu;

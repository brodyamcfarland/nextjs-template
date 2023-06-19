export default function Home() {
     return (
          <main className="flex flex-col flex-1 items-center justify-center gap-2 p-2">
               <div className="mainContainer h-[10rem]">CONTAINER</div>
               <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-purple-800 to-red-900 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0 bg-gradient-to-br from-purple-800/20 to-red-900/20">
                         BUTTON
                    </span>
               </button>
          </main>
     );
}

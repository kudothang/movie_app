// components/common/Header.tsx
import { Search } from "lucide-react"; // Using lucide-react for icons

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-6 bg-gray-800 ">
      <h1 className="text-2xl font-medium text-white cursor-pointer">MOVIE<mask className="text-orange-300">VENIE</mask></h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            placeholder="Search Movie"
            className="w-64 bg-gray-700 border border-gray-700 text-white placeholder-gray-400 px-3 py-2 rounded-full  focus:outline-none focus:ring-0 focus:border-transparent"
          />
          <button className="absolute right-0 top-0 h-full px-3 text-gray-400">
            <Search className="h-5 w-5 text-white hover:text-orange-300 cursor-pointer" />
          </button>
        </div>
        <div className="user-profile flex items-center space-x-2 cursor-pointer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcLrXKnHb2C4KNOggE1ZrY0pNl7aEmwEZvXBZoIWF02W8ubtgHVMK1P7mYIvTyq3kk00oVtnimdGiTalfr85Ca_4DZgYyHn-fh59NcQ&s=10" alt="" className=" object-cover rounded-full w-10 h-10" />
        </div>
      </div>
    </header>
  );
}
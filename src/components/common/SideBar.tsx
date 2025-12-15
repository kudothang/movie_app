// components/common/Sidebar.tsx
import { Compass, Flame, Heart, Home, Tv } from "lucide-react";
import { ButtonWithIcon } from "../ui/ButtonWithLogo";

export function Sidebar() {
  return (
    <div className=" flex flex-col items-center fixed top-50  bg-gray-800">
      <ButtonWithIcon to='/' Icon={Home} title="Home" />
      <ButtonWithIcon to='/popular' Icon={Flame} title="Trending" />
      <ButtonWithIcon to='/now_playing' Icon={Compass} title="Now Playing" />
      <ButtonWithIcon to='/top_rated_movies/' Icon={Tv} title="Top Movie" />
      <ButtonWithIcon to='/upcoming' Icon={Heart} title="Upcoming" />
    </div>
  );
}
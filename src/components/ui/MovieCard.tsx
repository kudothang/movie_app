import { Play } from "lucide-react";
import type { Movie } from "@/types";
import { Link } from "react-router";

interface MovieCardProps {
  movie?: Movie;
  }


export default function MovieCard({ movie}: MovieCardProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden group cursor-pointer `}>
      <Link to={`/movie/${movie?.id}`} >
      {/* Poster */}
      <img
        src={movie?.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/placeholder.png'}
        alt={movie?.title}
        className="w-65 h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Dark Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-linear-to-t from-black/80 to-transparent"></div>

      {/* Original Title */}
      <div className="absolute bottom-4 left-4 flex flex-col">
        <h2 className="text-2xl font-bold text-white drop-shadow-md">{movie?.title}</h2>
        <p className="text-gray-300 text-sm -mt-1">{movie?.original_title}</p>
      </div>

      {/* Play Button */}
      <button className="
        absolute bottom-4 right-4 w-12 h-12 rounded-full 
        bg-yellow-400 flex items-center justify-center shadow-lg
        hover:bg-yellow-300 transition
      ">
        <Play size={24} className="text-white" />
      </button>
      </Link>
    </div>
  );
}

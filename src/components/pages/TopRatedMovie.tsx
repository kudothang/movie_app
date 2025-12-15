
import MovieCard from "../ui/MovieCard";
import { useSearchParams } from "react-router-dom";
import type { Movie } from '@/types'

import { useTopRatedMovies } from "@/hooks/useTopRatedMovies";



export default function TopRatedMovies() {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get("page")) || 1;
  const { data, isLoading,
    isError,
    isFetching,

  } = useTopRatedMovies(page)
  const showMovies: Movie[] = data ?? []
  const title = "Top Rated Movies"
  const handleNextPage = () => {
    const nextPage = page + 1
    setParams({ page: String(nextPage) })
  }
  const handlePrevPage = () => {
    const prevPage = page - 1
    setParams(prevPage > 1 ? { page: String(prevPage) } : {}) // Remove 'page' param if prevPage is 1
  }
  return (
    <div className="min-h-screen text-white py-12">
      <div className="container mx-auto px-6">
        {/* Tiêu đề */}
        <h1 className="text-4xl font-bold mb-12 text-left">
          {title}
        </h1>

        {/* Grid: 5 cột 4 dòng */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-12 gap-y-8 mb-16">
          {isLoading ? (
            // Skeleton loading
            [...Array(20)].map((_, i) => (
              <div key={i} className="p-2">
                <div className="bg-gray-800 rounded-xl aspect-2/3 animate-pulse" />
              </div>
            ))
          ) : (
            showMovies.map((movie) => (
              <div key={movie.id} className="p-2">
                <MovieCard movie={movie} />
              </div>
            ))
          )}

          {/* Skeleton khi đang load more */}
          {isFetching &&
            [...Array(10)].map((_, i) => (
              <div key={`load-${i}`} className="p-2">
                <div className="bg-gray-800 rounded-xl aspect-2/3 animate-pulse" />
              </div>
            ))}
        </div>
        <div className="pagination flex items-center justify-center gap-4 mb-8">
          <button className="cursor-pointer" onClick={handlePrevPage}>Previous</button>
          <button>{page}</button>
          <button className="cursor-pointer" onClick={handleNextPage}>Next</button>
        </div>
        {isError && (
          <p className="text-center text-red-500 text-xl mt-16">
            Có lỗi xảy ra khi tải dữ liệu. Vui lòng thử lại sau.
          </p>
        )}
      </div>
    </div>
  )
}
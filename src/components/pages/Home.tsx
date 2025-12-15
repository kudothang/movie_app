// import HeroBanner from '../components/sections/HeroBanner'
import MovieRow from '@/components/ui/MovieRow'
import { useTopRatedShows } from '@/hooks/useTopRateShows'
import HeroBanner from '../ui/HeroBanner'
import { useTopRatedMovies } from '@/hooks/useTopRatedMovies'
import { usePopularMovies } from '@/hooks/usePopularMovies'



export default function Home() {

  const popularMovies = usePopularMovies(1)
  const topRatedshow = useTopRatedShows()
  const topratedmovies = useTopRatedMovies(1)



  return (
    <>
      <HeroBanner />
      <MovieRow title="Popular Movies" movies={popularMovies.data || []} isLoading={popularMovies.isLoading} />
      <MovieRow title="Movie and Show " movies={topratedmovies.data || []} isLoading={topratedmovies.isLoading} />
      <MovieRow title="" movies={topRatedshow.data || []} isLoading={topRatedshow.isLoading} />

    </>
  )
}
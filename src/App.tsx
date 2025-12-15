import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from '@/components/pages/Home'
import PopularPage from './components/pages/PopularPage'
import NowPlayingPage from './components/pages/NowPlayingPage'
import MovieDetail from './components/pages/MovieDetail'
import TopRatedMovies from './components/pages/TopRatedMovie'
import UpComingMovies from './components/pages/UpcomingMovies'


// import MovieDetail from './pages/MovieDetail'
// import Favorites from './pages/Favorites'
// import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/now_playing" element={<NowPlayingPage/> }/>
        <Route path="/top_rated_movies" element={<TopRatedMovies/> }/>
        <Route path="/upcoming" element={<UpComingMovies/> }/>
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App
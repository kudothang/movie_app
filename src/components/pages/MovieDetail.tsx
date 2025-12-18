import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { fetchMovieDetail } from '@/api/tmdb'
import { Button } from '../ui/button'
import { Play } from 'lucide-react'

export default function MovieDetail() {
    const { id } = useParams<{ id: string }>()
    const { data: movie, isLoading } = useQuery({
        queryKey: ['movie', id],
        queryFn: () => fetchMovieDetail(Number(id)).then(res => res.data),
    })

    if (isLoading) return <div>Loading...</div>
    if (!movie) return <div>Not found</div>

    return (
        <div className="flex flex-col gap-y-3 w-270 ] ">
            <div className='relative '>
                <div className='absolute bottom-1.5 left-4'>
                    <h1 className=" text-3xl text-white font-bold mb-4">{movie.title}</h1>
                    <h1 className='text-yellow-400 font-bold'>IMDB: {movie.vote_average}</h1>
                    <div className='flex gap-3 my-5' >
                        <button className="
         w-12 h-12 rounded-full 
        bg-yellow-500 flex items-center justify-center shadow-lg
        hover:bg-yellow-300 transition cursor-pointer
      ">
                           <Play size={24} className="text-white" />
                          
                        </button>
                        <button className="font-bold cursor-pointer">Watch the trailer</button>
                    </div>

                </div>
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className="float-left mr-4 rounded" />
            </div>
            <h1 className="text-3xl text-yellow-400 font-bold mb-4">{movie.title}</h1>
            <p className="text-lg">{movie.overview}</p>
            <h1 className='text-center text-yellow-400 font-bold text-3xl '>Download</h1>
            <div className='flex items-center justify-center gap-3 '>
                <Button className='bg-yellow-400 text-black font-bold  '> 480P</Button>
                <Button className='bg-yellow-400 text-black font-bold'>720P</Button>
                <Button className='bg-yellow-400 text-black font-bold'> 1080P</Button>
            </div>


        </div>
    )
}
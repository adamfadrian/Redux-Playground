/* eslint-disable react-hooks/rules-of-hooks */
import NavbarMovie from '@/components/movie/NavbarMovie'
import React, { useCallback, useEffect, useState } from 'react'
import Search from '@/components/movie/Search'
import CardMovie from '@/components/movie/CardMovie'
import axios from 'axios'
import Movie from '@/utils/type'
import Loading from '@/components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieToFav, removeFavList } from '@/redux/reducers/favorite/favoriteSlice'
import { RootState } from '@/redux/store/store'
import ButtonA from '@/components/ButtonA'
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material'
export const IMG_URL = "https://image.tmdb.org/t/p/w500"
const index = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')
    const [pageCount, setPageCount] = useState<number>(1)
    const [getAllMovie, setGetAllMovie] = useState<Movie[]>([])
    const dispatch = useDispatch()
    const favorite = useSelector((state: RootState) => state.favorite.movie)



    const fetchMovies = useCallback(async () => {
        setIsLoading(true)
        try {
            const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGNmODg5YjhkNGJjZGM0NWZmYzg3NDIxMjI2MzBkNSIsInN1YiI6IjYzZWI5ZTNmMWI3Mjk0MDBjZDk1ZWU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iZMKu8JlDYnI6RdoAVLM3A_US2uarAqFBVnad1tA0v8'
                }
            })
            setMovies(res.data.results)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }, [])



    const fetchAllMovies = useCallback(async (page: number) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en&page=${page}`, {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGNmODg5YjhkNGJjZGM0NWZmYzg3NDIxMjI2MzBkNSIsInN1YiI6IjYzZWI5ZTNmMWI3Mjk0MDBjZDk1ZWU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iZMKu8JlDYnI6RdoAVLM3A_US2uarAqFBVnad1tA0v8'
                }
            })
            if (res) {
                setGetAllMovie(res.data.results)
            }
        } catch (error) {

        }
    }, [])

    const handleAddToFavorite = (movie: Movie) => {
        dispatch(addMovieToFav(movie))
    }

    // useEffect(() => {
    //     fetchMovies()
    // }, [])



    // Fetch new data whenever the page count changes
    useEffect(() => {
        fetchAllMovies(pageCount);
    }, [pageCount]);

    return (
        <div className='w-full h-full bg-slate-400'>

            <NavbarMovie>
                <Search onSearch={(e) => setSearch(e.target.value)} />
            </NavbarMovie>
            <div className='w-full p-4 flex flex-col gap-4 justify-center items-center '>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 mx-auto lg:px-10 gap-5'>
                    {
                        isLoading ? <Loading /> :
                            getAllMovie.filter((item: Movie) => {
                                return search.toLocaleLowerCase() === "" ? item : item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                            }).map((data: Movie) => {
                                return (
                                    <CardMovie 
                                        title={data.title}
                                        description={data.overview}
                                        image={IMG_URL + data.poster_path}
                                        release={data.vote_average}
                                        key={data.id}
                                    >
                                        <ButtonA text={'AddToFavorite'} onClick={() => handleAddToFavorite(data)} />
                                    </CardMovie>
                                )
                            })
                    }
                </div>
                <div className="btn-group flex justify-center mt-10 ">
                    <Stack spacing={2} direction="row"> {/* Use Stack to align Pagination */}
                        <Pagination
                            color="primary"
                            count={10} // Total number of pages
                            variant="outlined"
                            page={pageCount} // Current active page
                            onChange={(_, value) => setPageCount(value)} // Handle page change
                        />
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default index
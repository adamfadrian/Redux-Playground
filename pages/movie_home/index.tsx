/* eslint-disable react-hooks/rules-of-hooks */
import NavbarMovie from '@/components/NavbarMovie'
import React, { useCallback, useEffect, useState } from 'react'
import Search from '@/components/Search'
import CardMovie from '@/components/CardMovie'
import axios from 'axios'
import Movie from '@/utils/type'
import Loading from '@/components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieToFav, removeFavList } from '@/redux/reducers/favorite/favoriteSlice'
import { RootState } from '@/redux/store/store'
import ButtonA from '@/components/ButtonA'

export const IMG_URL = "https://image.tmdb.org/t/p/w500"
const index = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')
    const dispatch = useDispatch()
    const favorite = useSelector((state: RootState) => state.favorite.movie)

    console.log('favorite', favorite)


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

    console.log('test', movies)

    const handleAddToFavorite = (movie: Movie) => {
        dispatch(addMovieToFav(movie))
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <div className='w-full h-full'>

            <NavbarMovie>
            <Search onSearch={(e) => setSearch(e.target.value)} />
            </NavbarMovie>
            <div className='w-full p-4'>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 mx-auto lg:px-10 gap-5'>
                    {
                        isLoading ? <Loading /> :
                            movies.filter((item: Movie) => {
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
            </div>
        </div>
    )
}

export default index
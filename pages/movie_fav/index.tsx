/* eslint-disable react-hooks/rules-of-hooks */
import CardMovie from '@/components/movie/CardMovie'
import { RootState } from '@/redux/store/store'
import Movie from '@/utils/type'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IMG_URL } from '../movie_home'
import { removeFavList } from '@/redux/reducers/favorite/favoriteSlice'
import ButtonA from '@/components/ButtonA'

const index = () => {
    const dispatch = useDispatch()
    const favorite = useSelector((state: RootState) => state.favorite.movie)

    const removeFromFav = (movie:Movie) => {
        dispatch(removeFavList(movie))
    }
    return (
        <div className='grid grid-cols-4 items-center justify-center gap-8 w-full h-full p-20'>
            {
                favorite.map((item: Movie) => {
                    return (
                        <CardMovie
                            title={item.title}
                            description={item.overview}
                            image={IMG_URL + item.poster_path}
                            release={item.vote_average}
                            key={item.id}
                            >
                                <ButtonA text={'Remove Fav'} onClick={() => removeFromFav(item)} />
                            </CardMovie>
                    )
                })
            }
        </div>
    )
}

export default index
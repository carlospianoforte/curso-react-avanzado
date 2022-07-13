import React from 'react'
import { useGetFavorite } from '../hooks/useGetFavorite'
import { ListOfFavs } from '../components/ListOfFavs'

export const Favs = () => {
  const { data, loading, error } = useGetFavorite()

  if (loading) return <p>loading...</p>
  if (error) return <p>error</p>

  return <ListOfFavs favs={data.favs} />
}

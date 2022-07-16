import React from 'react'
import { useGetFavorite } from '../hooks/useGetFavorite'
import { ListOfFavs } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'

export const Favs = () => {
  const { data, loading, error } = useGetFavorite()

  if (loading) return <p>loading...</p>
  if (error) return <p>error</p>

  return (
    <Layout title='Tus Favoritos' subtitle='Encuentra tus mascotas Favoritas'>
      <ListOfFavs favs={data.favs} />
    </Layout>
  )
}

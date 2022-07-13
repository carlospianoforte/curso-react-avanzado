import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetPhoto } from '../hooks/useGetPhotos'
import { Link } from 'react-router-dom'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetPhoto(id)
  console.log(data)

  if (loading) { return <p>Loading...</p> }
  if (error) { return <p>ERROR SERVER</p> }

  const { photo = {} } = data

  return (
    <>
      <Link to='/'>BACK</Link>
      <PhotoCard {...photo} />
    </>
  )
}

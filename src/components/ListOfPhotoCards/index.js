import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery, gql } from '@apollo/client'

const withPhotos = gql`
  query getPhotos($categoryId: ID){
    photos(categoryId: $categoryId){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useQuery(withPhotos, { variables: { categoryId } })

  if (error) {
    return <h1>Internal server error</h1>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul>
      {data.photos.map((photo) => (<PhotoCard key={photo.id} {...photo} />))}
    </ul>
  )
}

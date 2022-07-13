import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

export const Detail = () => {
  const params = useParams()
  console.log(params)
  return (

    <PhotoCardWithQuery id={params.id} />
  )
}

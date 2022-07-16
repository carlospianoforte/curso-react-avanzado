import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'

export const Home = () => {
  const { id } = useParams()
  return (
    <Layout>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}

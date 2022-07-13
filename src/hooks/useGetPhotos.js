import { useQuery, gql } from '@apollo/client'

export const useGetPhoto = (id) => {
  const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, { variables: { id } })
  return { loading, error, data }
}

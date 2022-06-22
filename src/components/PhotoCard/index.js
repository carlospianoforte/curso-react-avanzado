import React from 'react'
import { ImgWraper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://via.placeholder.com/150'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWraper>
          <Img src={src} alt='' />
        </ImgWraper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' /> {likes} likes!
      </Button>
    </article>
  )
}

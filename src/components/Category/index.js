import React from 'react'
import { Link, Image } from './style'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpeg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)

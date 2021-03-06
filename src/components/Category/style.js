import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;
`

export const Image = styled.img`
    border: 1px solid #ddd;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
    object-fit: cover;
    border-radius: 50%;
    height: auto;
    overflow: hidden;
    height: 75px;
    width: 75px;
`

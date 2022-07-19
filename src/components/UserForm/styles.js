import styled from 'styled-components'

export const Form = styled.form`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items:center;
`

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 8px 4px;
    display: block;
    width: 80%;
    &[disabled] {
        opacity: 0.3;
    }
`

export const Button = styled.button`
    background: #8d00ff;
    border-radius: 3px;
    color: #fff;
    height: 32px;
    display: block;
    width:80%;
    text-align: center;
    &[disabled] {
        opacity: 0.3;
    }
    
`

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 500;
    padding: 8px;
    
`
export const Img = styled.img`
    width: 350px;
    padding: 30px;
    margin: auto;
    display: block;
`

export const Error = styled.span`
    font-size: 16px;
    color: red;
`

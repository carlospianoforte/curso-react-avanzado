import styled from 'styled-components'

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
export const Form = styled.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items:center;
`

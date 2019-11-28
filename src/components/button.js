
import styled, { css } from 'styled-components'
import '../css/main.css'


const Button = styled.Button = styled.a`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #ffc529;
  color: #ffc529;
  margin: 1em 1em;
  padding: 0.25em 1em;
  &:hover {
    text-decoration:none;
    color: orange;
  }

  ${props => props.primary && css`
    background:#ffc529;
    color: black;
    padding: 0.5em 3em;
    &:hover {
      text-decoration:none;
      color: white;
      background: #facd51;
    }
  `}

  ${props => props.donateblk && css`
    background:#000;
    color: orange;
    border: 2px solid #000;
    display: inline-block;
  `}
  ${props => props.nav && css`
    background:#ffc529;
    color: #FFF;
    padding: 0.5em 3em;
    &:hover {
      text-decoration:none;
      color: black;
      font-weight: 900;
    }
  `}
`

{/**const Container = styled.div`
  text-align: center;
  `**/}

export default Button
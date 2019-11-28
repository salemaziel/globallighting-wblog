
import styled, { css } from 'styled-components'
import '../css/main.css'


const Button = styled.Button = styled.a`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #ffc259;
  color: #ffc259;
  margin: 1em 1em;
  padding: 0.25em 1em;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px #000000;
  
  &:hover {
    text-decoration:none;
    color: orange;
    backgroundColor: #facd51;
    border-radius: 3px;
    border: 2px solid #facd51;
    text-shadow: 1px 1px 3px #000000;
  }

  ${props => props.primary && css`
    background:#ffc259;
    color: white;
    padding: 0.5em 3em;
    &:hover {
      text-decoration:none;
      color: white;
      background: #facd51;
    }
  `}

  ${props => props.donateblk && css`
    background:#ffc259;
    color: orange;
    border: 2px solid #ffc259;
    display: inline-block;
      &:hover {
    text-decoration:none;
    color: orange;
    backgroundColor: #facd51;
    border-radius: 3px;
    border: 2px solid #facd51;
    text-shadow: 1px 1px 3px #000000;
  }
  `}
  ${props => props.nav && css`
    background:#ffc259;
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
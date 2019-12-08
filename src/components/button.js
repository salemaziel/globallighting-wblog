
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
      color: white;
      font-weight: 900;
    }
  `}
  ${props => props.synergy && css`
    background:#ffc259;
    color: #FFF!important;
    padding: 0.5em 3em;
    textShadow: none;
    &:hover {
      text-decoration:none;
      color: white;
      font-weight: 700;
    }
  `}
  ${props => props.mailinglist && css`
    width: calc(100% + 2rem);
    margin-left: -1rem;
    display: inline-block;
    vertical-align: middle;
    max-width: calc(100% - 2rem);
    color: #FFFFFF;
    margin: 0 0;
    border: none;
    background:transparent;
    color: #FFF!important;
    padding: 0 3em;
    textShadow: none;
    line-height: 3.25rem
    height: 3.25rem
    &:hover {
      color: #ffc529!important;
      border-color: none;
      border: none;
      text-decoration:none;
      font-weight: 700;
    }
  `}
  ${props => props.signup && css`
    margin-left: -1rem;
    display: inline-block;
    vertical-align: middle;
    max-width: calc(100% - 2rem);
    color: lightgray!important;
    margin: 0 0;
    border: 1px solid lightgray;
    background:transparent;
    padding: 0 3em;
    text-shadow: none;
    &:hover {
      cursor: pointer;
      margin-left: -1rem;
      display: inline-block;
      vertical-align: middle;
      max-width: calc(100% - 2rem);
      color: darkgray!important;
      margin: 0 0;
      border: 1px solid darkgray!important;
      background:transparent;
      padding: 0 3em;
      text-shadow: none!important;
    }
  `}
`

export default Button
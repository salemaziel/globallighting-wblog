
import styled, { css } from 'styled-components'


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
    color: white!important;
    padding: 0.5em 3em;
    &:hover {
      text-decoration:none;
      color: white;
      background: #facd51;
    }
  `}

  ${props => props.campaign && css`
  background:#ffc259;
  color: white!important;
  padding: 0.5em 1em;
  -webkit-transition: 0.3s all ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
  &:hover {
    text-decoration:none;
    color: white;
    background: #facd51;
    -webkit-transition: 0.3s all ease-in-out;
    -o-transition: 0.3s all ease-in-out;
    transition: 0.3s all ease-in-out;
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
    padding: 0.5em 1.5em;
    textShadow: none;
    -webkit-transition: 0.3s all ease-in-out;
    -o-transition: 0.3s all ease-in-out;
    transition: 0.3s all ease-in-out;
    &:hover {
      text-decoration:none;
      color: white;
      font-weight: 700;
      -webkit-transition: 0.3s all ease-in-out;
      -o-transition: 0.3s all ease-in-out;
      transition: 0.3s all ease-in-out;
    }
  `}
  ${props => props.mailinglist && css`
  text-decoration: none;
  font-family: Montserrat, sans-serif;
  margin: auto;
  display: flex;
  text-transform: uppercase;
  text-align: center;
  color: #fff!important;
  width: 16rem;
  height: 3.25rem;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  line-height: 3.25rem;
  font-size: 0.875em;
  letter-spacing: 0.275rem;
  font-weight: 900;
  padding: 0px 1.625rem;
  border-radius: 0.25rem;
  transition: 0.4s ease-out;
  -webkit-transition: 0.3s all ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
    &:hover {
      color: #ffc529!important;
      border: 2px solid #fff;
      text-decoration:none;
      cursor: pointer;
      transform: scale(1.05);
      transition: 0.4s ease-out;
      -webkit-transition: 0.3s all ease-in-out;
      -o-transition: 0.3s all ease-in-out;
      transition: 0.3s all ease-in-out;
    }
  `}
  ${props => props.signup && css`
    margin-left: -1rem;
    display: inline-block;
    vertical-align: middle;
    max-width: calc(100% - 2rem);
    color: lightgray!important;
    margin: 0 0;
    border: none;
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
      border: none;
      background:transparent;
      padding: 0 3em;
      text-shadow: none!important;
    }
  `}
`

export default Button
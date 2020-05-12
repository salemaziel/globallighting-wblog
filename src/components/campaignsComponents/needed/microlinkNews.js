import React from "react"
import Container from "react-bootstrap/Container"

import Button from "../../button"
import Row from "react-bootstrap/Row"

import Col from "react-bootstrap/Col"
import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card"
import Microlink from "@microlink/react"

import mlcardStyles from './mlcard.module.css'

const mlLink = [
  {
    url: "https://www.bbc.com/news/business-51914722",
    size: "large",
    media: ["media"],
  },
  {
    url:
      "https://www.bbc.com/future/article/20200327-can-you-kill-coronavirus-with-uv-light",
    size: "large",
    media: ["media"],
  },
  {
    url: "https://www.news.ucsb.edu/2020/019860/power-light",
    size: "large",
    media: ["media"],
  },
]

//const MLNews = (props) => (

class MLNews extends React.Component {
  constructor() {
    super()

    this.state = {
      url: "",
      size: "",
      media: "",
    }
  }
  render() {
    let { url, size } = this.props
    return (
      <>
        <Container style={{padding: '0'}}>
          <Row>
            <CardDeck className={mlcardStyles.MLinkCardDeck}>
             {/* <Card className={mlcardStyles.MLCard}>
                  <Card.Body>*/}
                <Microlink
                  url={mlLink[0].url}
                  size={mlLink[0].size}
                  media={mlLink[0].media}
                  className={mlcardStyles.MLink}
                />
               {/* </Card.Body>
              </Card>*/}

             {/* <Card className={mlcardStyles.MLCard}>
              <Card.Body>*/}

                <Microlink
                  url={mlLink[1].url}
                  size={mlLink[1].size}
                  media={mlLink[1].media}
                  className={mlcardStyles.MLink}
                />
             {/*   </Card.Body>
              </Card>*/}

             {/* <Card className={mlcardStyles.MLCard}>
              <Card.Body>*/}

                <Microlink
                  url={mlLink[2].url}
                  size={mlLink[2].size}
                  media={mlLink[2].media}
                  className={mlcardStyles.MLink}
                />
              {/*  </Card.Body>
              </Card>*/}
            </CardDeck>
          </Row>
        </Container>
      </>
    )
  }
}
export default MLNews

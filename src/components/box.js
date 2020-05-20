import React from "react"
import "../css/box.css"

import { CardDeck } from "reactstrap"

import Modalsky1 from "./modalsky1"
import Modalsky2 from "./modalsky2"
import Modalsky3 from "./modalsky3"

//const Box = () => (

class Box extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CardDeck>
        <div className="innerDeck">
          <div className="thumbnails">
            <div className="box">
              <Modalsky1 />
            </div>

            <div className="box">
              <Modalsky2 />
            </div>

            <div className="box">
              <Modalsky3 />
            </div>
          </div>
        </div>
      </CardDeck>
    )
  }
}
export default Box

import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardHeader,
  CardText,
  CardSubtitle
} from "reactstrap";
//import { render } from "enzyme";


//function starts here
export default function DataCards() {
    const [stats, handleStats] = useState([]);
    useEffect(() => {
        FetchData()
      }, [])

        //data fetching from the api
  const FetchData = async () => {
    const data = await fetch('https://corona.lmao.ninja/all'); //data source
    const stats = await data.json();
    
    
    handleStats(stats)
  }
//    const greeting = "Hey Functional Component!";

  return (
    <React.Fragment>
      <Container className="d-inline-flex">
          <Row className="dataCardsRow">
          <Col>
        <Card className="dataCards">
            {/*<CardHeader>CoronaVirus Statistics</CardHeader>*/}
            <CardImg top width="100%" src="https://cdn.pixabay.com/photo/2020/03/09/14/11/virus-4915859_1280.png" alt='' />
                <CardBody className="dataCardBody">
                    <CardTitle>Latest Recoveries</CardTitle>
                    <CardText>
                     {stats.recovered}
                    </CardText>
                </CardBody>
        </Card>
        </Col>
        <br />
        <Col>
        <Card className="dataCards">
            {/*<CardHeader>CoronaVirus Statistics</CardHeader>*/}
            <CardImg top width="100%" src="https://cdn.pixabay.com/photo/2020/03/09/14/11/virus-4915859_1280.png" alt='' />
                <CardBody className="dataCardBody">
                    <CardTitle>Latest Cases</CardTitle>
                    <CardText>
                     {stats.cases}
                    </CardText>
                </CardBody>
        </Card>
        </Col>
        <br />
        <Col>
        <Card className="dataCards">
         {/* <CardHeader>CoronaVirus Statistics</CardHeader>*/}
            <CardImg top width="100%" src="https://cdn.pixabay.com/photo/2020/03/09/14/11/virus-4915859_1280.png" alt='' />
                <CardBody className="dataCardBody">
                    <CardTitle>Latest Deaths</CardTitle>
                    <CardText>
                     {stats.deaths}
                    </CardText>
                </CardBody>
        </Card>
        </Col>
        <br />
        {/*<Col>
        <Card>
            <CardHeader>CoronaVirus Statistics</CardHeader>
            <CardImg top width="100%" src="https://cdn.pixabay.com/photo/2020/03/09/14/11/virus-4915859_1280.png" alt='' />
                <CardBody>
                    <CardTitle>Latest Coordinates</CardTitle>
                    <CardText>
                     {stats.coordinates}
                    </CardText>
                </CardBody>
        </Card>
        </Col>*/}
        
        </Row>
      </Container>
    </React.Fragment>
  );
}




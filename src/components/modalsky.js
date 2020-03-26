import React, { Children } from 'react';
import SkyLight from 'react-skylight';
import Button from './button'
import MyGallery from './new/modalpics1';
import Modal01pics from './modal01pics'
import {
  Card, CardImg, CardBody,
  CardTitle, CardDeck,
} from 'reactstrap';
import Nightlight from '../images/stock-nightlight-468x312.jpg'
import Modalpics101 from './new/modalpics101';



class Modalsky extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <>
        <Card>
					<CardImg top width="100%" src={Nightlight} className="img fit" alt="Card image cap" />
        				<CardBody>
								<div className="innerCard">
									
								<CardTitle>

									<h3>Lighting the way for Homes, Schools, and Businesses with White LED Lights</h3>
								</CardTitle>
									
									{/*<Modalsynergy01 />
									<Modalsky>
										<Modal01pics />
									</Modalsky>*/}
									<div>
          							<Button  synergy onClick={() => this.simpleDialog.show()}>See More</Button>
        							</div>
        							<SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref}>
            							<Modalpics101 />
        							</SkyLight>

								</div>
						</CardBody>
						</Card>
      </>
    )
  }
}

Modalsky.displayName = 'Modalsky';

export default Modalsky
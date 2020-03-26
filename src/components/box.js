import React from 'react'
import '../css/box.css'

import Hydroveggie from '../images/1-young-tomato-468x312.jpg'
import Nightlight from '../images/stock-nightlight-468x312.jpg'
import UVsterilize from '../images/synergy-water-3-468x312.jpg'

import Button from './button'
import MyGallery from './new/modalpics1';
import Modal01pics from './modal01pics'
import SkyLight from 'react-skylight';



import {
  Card, CardImg, CardBody,
  CardTitle, CardDeck,
} from 'reactstrap';
import Modalsynergy01 from './modal01'
import Modalsynergy03 from './modal03'
import Modalsynergy02 from './modal02'
import Modalsky from './modalsky'



//const Box = () => (

	class Box extends React.Component {
		constructor(props){
		  super(props);
		}
	  
		render() {
	  
		  return (      
			<CardDeck>
			<div className="innerDeck">

				<div className="thumbnails">
					
					<div className="box">
					
					{/*<Card className="scale">
					<CardImg top width="100%" src={Nightlight} className="img fit" alt="Card image cap" />
        				<CardBody>
								<div className="innerCard">
									
								<CardTitle>

									<h3>Lighting the way for Homes, Schools, and Businesses with White LED Lights</h3>
								</CardTitle>
									
									
								
          							{/*<Button  synergy onClick={() => this.simpleDialog.show()}>See More</Button>
        							
        							<SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref}>
            							<Modal01pics />
        							</SkyLight>* /}

								</div>
								<Modalsky />
						</CardBody>
		  </Card>*/}
		  <Modalsky />
									
					</div>
				
					<div className="box">
					<Card>  
					<CardImg top width="100%" src={Hydroveggie} className="img fit" alt="Card image cap" />
        				<CardBody>
								<div className="innerCard">
									
								<CardTitle>


									<h3>Growing Healthy Vegetable Gardens Anywhere with RGB LED Lights</h3></CardTitle>
								{/**<CardText tag="p">Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.
								</CardText>**/}
								{/**<Button as={Link} href="#" prefetch primary>Learn More</Button>**/}
								<Modalsynergy02 />

								</div>
						</CardBody>
					</Card>					
					</div>

					<div className="box">
					<Card>
					<CardImg top width="100%" src={UVsterilize} className="img fit" alt="Card image cap" />

        				<CardBody>
								<div className="innerCard">
								<CardTitle>
									<h3>Sanitizing Water, Cooking Facilities and More with Ultra Violet LED Lights</h3>

								</CardTitle>	
								{/**<CardText tag="p">Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.
								</CardText>**/}
								{/**<Button as={Link} href="#" prefetch primary>Learn More</Button>**/}
								<Modalsynergy03 />
								</div>
						</CardBody>
					</Card>	
					</div>
					
				</div>

			</div>
		</CardDeck>
)
							}
						}
export default Box
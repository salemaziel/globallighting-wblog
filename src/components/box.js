import React from 'react'
import '../css/box.css'
import '../css/HomePageCss/synergy.css'
import Hydroveggie from '../images/shutterstock/1-young-tomato.jpg'
import Nightlight from '../images/stock-nightlight.jpg'
import UVsterilize from '../images/shutterstock/1-sanjose-water.jpg'
import { Link } from 'gatsby'

import Button from '../components/button'
import Modalbutton from '../components/boxmodal'

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardDeck
} from 'reactstrap';


const Box = () => (

        <div id="main">
			<CardDeck>
			<div class="inner">

				<div class="thumbnails">
					
					<div class="box scale">
					
					<Card>
					<CardImg top width="100%" src={Nightlight} class="img fit" alt="Card image cap" />
        				<CardBody>
								<div class="inner">
									
								<CardTitle>

									<h3>Lighting the way for Homes, Schools, and Businesses with White LED Lights</h3>
								</CardTitle>
								
          
        
        
									<Modalbutton prefetch primary />	

								</div>
						</CardBody>
						</Card>
					</div>
				
					<div class="box scale">
					<Card>
					<CardImg top width="100%" src={Hydroveggie} class="img fit" alt="Card image cap" />
        				<CardBody>
								<div class="inner">
									
								<CardTitle>


									<h3>Grow Healthy Vegetable Gardens Anywhere with RGB LED Lights</h3></CardTitle>
								{/**<CardText tag="p">Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.
								</CardText>**/}
								<Button as={Link} href="#" prefetch primary>Learn More</Button>

								</div>
						</CardBody>
					</Card>					
					</div>

					<div class="box scale">
					<Card>
					<CardImg top width="100%" src={UVsterilize} class="img fit" alt="Card image cap" />

        				<CardBody>
								<div class="inner">
								<CardTitle>
									<h3>Sanitize Water, Cooking Facilities and More with Ultra Violet LED Lights</h3>

								</CardTitle>	
								{/**<CardText tag="p">Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.
								</CardText>**/}
								<Button as={Link} href="#" prefetch primary>Learn More</Button>
								</div>
						</CardBody>
					</Card>	
					</div>
					
				</div>

			</div>
		</CardDeck>
		</div>
)

export default Box
import React from 'react'
import '../css/box.css'
import '../css/HomePageCss/synergy.css'
import Hydroveggie from '../images/stock-hydroveggie.jpg'
import Nightlight from '../images/stock-nightlight.jpg'
import UVsterilize from '../images/stock-uvsterilize.jpg'
import { Link } from 'gatsby'

import Button from '../components/button'

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardHeader, CardDeck
} from 'reactstrap';


const Box = () => (

        <div id="main">
			<CardDeck>
			<div class="inner">

				<div class="thumbnails">
					
					<div class="box">
					
					<Card>
					<CardImg top width="100%" src={Nightlight} class="img fit" alt="Card image cap" />
					<CardHeader tag="h3">Header</CardHeader>
        				<CardBody>
								<div class="inner">
									
								<CardTitle>
									<h3>Nascetur nunc varius commodo</h3>
								</CardTitle>
									<CardText tag="p">	
										Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.
									</CardText>
									<Button as={Link} href="#" prefetch primary>Go somewhere</Button>	
								</div>
						</CardBody>
						</Card>
					</div>
				
					<div class="box">
					<Card>
					<CardImg top width="100%" src={Hydroveggie} class="img fit" alt="Card image cap" />
					<CardHeader tag="h3">Header</CardHeader>
        				<CardBody>
								<div class="inner">
									
								<CardTitle>
									<h3>Nascetur nunc varius commodo</h3></CardTitle>
								<CardText tag="p">Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.
								</CardText>
								<Button as={Link} href="#" prefetch primary>Go somewhere</Button>
								</div>
						</CardBody>
					</Card>					
					</div>

					<div class="box">
					<Card>
					<CardImg top width="100%" src={UVsterilize} class="img fit" alt="Card image cap" />
					<CardHeader tag="h3">Header</CardHeader>
        				<CardBody>
								<div class="inner">
								<CardTitle>
									<h3>Nascetur nunc varius commodo</h3>
								</CardTitle>	
								<CardText tag="p">Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.
								</CardText>
								<Button as={Link} href="#" prefetch primary>Go somewhere</Button>
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
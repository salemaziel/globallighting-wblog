import React from 'react';
import Button from './button'

import {
  Card, CardImg, CardBody,
  CardTitle, Container, Row, Col
} from 'reactstrap';
import Nightlight from '../images/stock-nightlight-468x312.jpg'
import Modalpics101 from './new/modalpics101';

import Modal from 'react-modal'

import  Modalpics101b from './new/modalpics101B'




class Modalsky1 extends React.Component {
  constructor(props){
	super(props)
	this.state = {
		isModalOpen: false,
		className: '',
		shouldCloseOnOverlayClick: '',
		shouldCloseOnEsc: '',
		shouldReturnFocusAfterClose: '',
		contentLabel: ''
	}
  }

  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  render() {

    return (
	  <div /*id="modal1"*/>
        <Card>
					<CardImg top width="100%" src={Nightlight} className="img fit" alt="Card image cap" />
        				<CardBody>
								<div className="innerCard">
									
								<CardTitle>

									<h3>Lighting the way for Homes, Schools, and Businesses with White LED Lights</h3>
								</CardTitle>
									<div>
          							<Button synergy onClick={this.handleModalOpen}>Learn About White LEDs</Button>
									<Modal
          								isOpen={this.state.isModalOpen}
          								onRequestClose={this.handleModalClose}
										contentLabel="White LED Lighting"
										id="modal1"
										shouldCloseOnOverlayClick={true}
										shouldCloseOnEsc={true}
										shouldReturnFocusAfterClose= {true}
										className="modalSynergy"
										overlayClassName="modalSynergyOverlay"
										

        							>
										<Container>
											<Row style={{textAlign: 'center', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignContent: 'center', alignItems: "center"}}>
												<Col>
												<h2>White LED Lighting</h2>
												</Col>
											</Row>
											
										<div>
									{/*	<Modalpics101 />*/}
									<Modalpics101b />
										</div>
										<div>
											<h3> * More information to come! *</h3>
											{/*<p>Lorem ipsum</p>*/}
										</div>
										</Container>
										</Modal>
	{/*</SkyLight>*/}
									</div>


								</div>
						</CardBody>
						</Card>
      </div>
    )
  }
}

Modalsky1.displayName = 'Modalsky1';

export default Modalsky1
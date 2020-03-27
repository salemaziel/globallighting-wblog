import React from 'react';
import Button from './button'

import {
Container, Row, Col
} from 'reactstrap';

import Modal from 'react-modal'
import Signup from './signup';



class Modalmailing extends React.Component {
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
                <div /*id="modalmailing"*/>
                                <div id="embed04">
          							<Button mailinglist onClick={this.handleModalOpen}>Mailing List</Button>
                                </div>
                                    <Modal
                                        id='modalmailing'
          								isOpen={this.state.isModalOpen}
          								onRequestClose={this.handleModalClose}
										contentLabel="Join Our Mailing List"
										
										shouldCloseOnOverlayClick={true}
										shouldCloseOnEsc={true}
										shouldReturnFocusAfterClose= {true}

        							>
										<Container>
											<Row style={{textAlign: 'center', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignContent: 'center', alignItems: "center"}}>
												<Col>
												<h2>Join Our Mailing List </h2>
												</Col>
											</Row>
											
										<div>
										    <Signup />
										</div>
										<div>
                                        <Button signup onClick={this.handleModalClose}>No thanks</Button>{' '}
										</div>
										</Container>
										</Modal>
									</div>
    )
  }
}

Modalmailing.displayName = 'Modalmailing';

export default Modalmailing
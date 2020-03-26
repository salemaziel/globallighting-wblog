import React, { useState } from 'react';
import { Card, Modal, ModalHeader, ModalContent, ModalBody, ModalFooter } from 'reactstrap';
import Button from './button'
import Modal01pics from './modal01pics';

const Modalsynergy01 = (props) => {
  const {
    buttonLabel,
    className,
    scrollable,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button synergy onClick={toggle}>See More</Button>
      <Modal scrollable isOpen={modal} toggle={toggle} className={className}>
      
          <ModalContent style={{
                padding: '2rem',
                maxWidth: '15rem',
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
          >
        <ModalHeader toggle={toggle}>White LED</ModalHeader>
        <ModalBody style={{
            display: 'flex',
            justifyContent: 'center',
            }}>
              
                <Modal01pics />
            
        </ModalBody>
        <ModalFooter>
          {/**<Button color="warn" onClick={toggle}>Learn More</Button>{' '}**/}
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
        </ModalContent>
        
      </Modal>
    </div>
  );
}

export default Modalsynergy01
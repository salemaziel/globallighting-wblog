import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from '../components/button'
import Modal02pics from './modal02pics';

const Modalsynergy02 = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button synergy onClick={toggle}>Learn More</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>RGB LED Lights</ModalHeader>
        <ModalBody style={{
            display: 'flex',
            justifyContent: 'center',
            }}>
              <Modal02pics />
        </ModalBody>
        <ModalFooter>
          {/**<Button color="warn" onClick={toggle}>Donate</Button>{' '}**/}
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modalsynergy02
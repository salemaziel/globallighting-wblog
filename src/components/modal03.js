import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from '../components/button'
import Modal03pics from './modal03pics';

const Modalsynergy03 = (props) => {
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
        <ModalHeader toggle={toggle}>Ultra Violet LED Lights</ModalHeader>
        <ModalBody style={{
            display: 'flex',
            justifyContent: 'center',
            }}>
              <Modal03pics />
        </ModalBody>
        <ModalFooter>
          {/**<Button color="warn" onClick={toggle}>Donate</Button>{' '}**/}
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modalsynergy03
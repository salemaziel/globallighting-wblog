import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from './button'
import Modal01pics from './modal01pics';

const Modalsynergy01 = (props) => {
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
        <ModalHeader toggle={toggle}>White LED</ModalHeader>
        <ModalBody style={{
            display: 'flex',
            justifyContent: 'center',
            }}>
            <Modal01pics />
        </ModalBody>
        <ModalFooter>
          <Button color="warn" onClick={toggle}>Learn More</Button>{' '}
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modalsynergy01
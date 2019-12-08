import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from './button'
import Signup from '../components/signup.js'


const Modalmailinglist = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button mailinglist onClick={toggle}>Mailing List</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Join Our Mailing List</ModalHeader>
        <ModalBody>
            <Signup />
        </ModalBody>
        <ModalFooter>
          <Button signup onClick={toggle}>No thanks</Button>{' '}
          {/**<Button color="secondary" onClick={toggle}>Cancel</Button>**/}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modalmailinglist
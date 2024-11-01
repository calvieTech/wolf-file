import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function CreateFolder() {
  const [showFileUpload, setShowFileUpload] = useState(false);

  const handleClose = () => setShowFileUpload(false);
  const handleShow = () => setShowFileUpload(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Create Folder
      </Button>

      <Modal
        size="lg"
        show={showFileUpload}
        onHide={handleClose}
        centered
        // backdrop="static"
        // keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Create Folder</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Control type="text" placeHolder="Folder name" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Create Now
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateFolder;

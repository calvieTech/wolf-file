import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './fileupload.css';

function FileUpload() {
  const [showFileUpload, setShowFileUpload] = useState(false);

  const handleClose = () => setShowFileUpload(false);
  const handleShow = () => setShowFileUpload(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Upload File
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
            <h3>Upload your file</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Control type="file" multiple />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Upload Now
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FileUpload;

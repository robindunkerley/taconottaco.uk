import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';

const ModalForm = () => {
const state = {
    isOpen: true,
}

const openModal = () => this.setState({ isOpen: true });
const closeModal = () => this.setState({ isOpen: false });


    return (
    <Modal show={this.state.isOpen} onHide={this.state.isOpen} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.state.isOpen}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default ModalForm


import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdAddCircleOutline, MdEdit, MdClose } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

function User() {

    const users = useSelector(state => state.user)
     //console.log(users)
    const dispatch = useDispatch();
    const {user} = bindActionCreators(actionCreators, dispatch);
   // console.log(manageAbout)

    // const [about, setAbout] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleAbout = (e) => {
        const valid = e.currentTarget;
        if (!valid.checkValidity()) {
            setValidated(true);
            setIsEdit(false)
        }
        else {
            setIsEdit(true)
        }
       user(e.target.value)
        // setAbout(e.target.value)

    }
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setValidated(false);
    }
    const handleShow = () => setShow(true);

    return (
        <Row className="justify-content-center mt-2">
            <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
                <h5 className="m-0">Intership</h5>
                {!isEdit && <MdAddCircleOutline size={30} className="rounded edit" onClick={handleShow} />}
                {isEdit && <MdEdit size={30} className="rounded edit" onClick={handleShow} />}
            </Col>
            <Col md={8} sm={12}>
                {
                    users &&
                    <p className="py-2 text-break">
                        {users}
                    </p>
                }
            </Col>
            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header>
                    <Modal.Title>Intershipexperience</Modal.Title>
                    <MdClose size={30} className="rounded edit" onClick={handleClose} />
                </Modal.Header>

                <Modal.Body>
                    <Form noValidate validated={validated}>
                        <Form.Group className="mb-3">
                            <Form.Control required as="textarea" rows={6} placeholder="Write about yourself" value={users} onChange={handleAbout} />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <button type="submit" className="rounded edit px-2" onClick={handleClose}>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal>
        </Row>
    )
}

export default User
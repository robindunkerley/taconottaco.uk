import React, {useState} from 'react';
import Modal from 'react-modal';
import Button1 from './Button'
import { Formik, Form, ErrorMessage } from "formik";
import { Button } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import * as Yup from 'yup';
import Input from './Input';
import Textarea from './Textarea';


//Imported Images
import Van from '../images/VanTop.jpg';
import closeIcon from '../images/closeIcon.png';

import '../style.css';

Modal.setAppElement('#root');

const Bookings = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const validate = Yup.object({
        email: Yup.string().email('Email is invalid').required('Required'),
        date: Yup.date().required("Required").nullable(),
    })

    return (

<div className='bookings' style={{backgroundImage: `url(${Van})` }}>
            <div className='bookings-overlay'>
                <h1>Pop-up Food Service <br />For Events or Establishments</h1>
                <Button1 text='Book Now' onClick={() => setModalIsOpen(true)} />
            </div>
            <Modal style={modalStyle} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                
                
                <Formik
                initialValues={{ email: "", date: "", message: "" }}

                onSubmit={(data, {setSubmitting}) => {
                    setSubmitting(true);
                    console.log(data);
                    setSubmitting(false);
                }}

                validationSchema={validate}
                >

                {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    
                    <div className="iconButton">
                    <IconButton onClick={() => setModalIsOpen(false)}>
                    <HighlightOffIcon id="close" src={closeIcon} />
                    </IconButton>
                    </div>
                        
                    <div className="booking-header">
                    <span>Bookings</span>
                    </div>
                        <ErrorMessage name="email" />
                        <Input                         
                        name="email"
                        placeholder="Email Address"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        />
                        <ErrorMessage name="date" />
                        <Input                         
                         name="date"
                         type="date"
                         value={values.date}
                         onChange={handleChange}
                         onBlur={handleBlur}
                        />
                        <Textarea 
                        name="message"
                        placeholder="Message"
                        value={values.message} 
                        onChange={handleChange} 
                        onBlur={handleBlur} 
                        cols="5" rows="5" 
                        />
                    <div id="booking-button-container">
                        <Button disabled={isSubmitting} type="submit">Submit</Button>
                    </div>
                </Form>

                )}

                </Formik>
            </Modal>
</div>
    )
}

const modalStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
      },
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '350px',
        borderRadius: '20px',
        boxSizing: 'border-box',
        background: 'blanchedalmond'
      }
}

export default Bookings

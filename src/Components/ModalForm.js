import React, {useState} from 'react';
import Modal from 'react-modal';
import Button1 from './Button'
import { Formik, Form, ErrorMessage, useFormik } from "formik";
import { Button } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import * as Yup from 'yup';
import Input from './Input';
import Textarea from './Textarea';
import emailjs from "emailjs-com";

const INITIAL_FORM_STATE = {};

const FORM_VALIDATION = Yup.object().shape


const ModalForm = () => {
    return (
        <div>
            <Formik initialValues={{
                ...INITIAL_FORM_STATE}}
                validationSchema:
                >
                <Form>

                </Form>
            </Formik>
        </div>
    )
}

export default ModalForm

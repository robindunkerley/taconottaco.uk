import React, {useState} from 'react';
import Modal from 'react-modal';


const Form = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    return (

<Modal isOpen={modalIsOpen}>
    <form> 
        <div className="input-container">
            <fieldset>
            <legend>Bookings</legend>
            <input type="text" placeholder="Email Address"/>
            <input type="date" />
            <textarea name="" id="" cols="5" rows="5" placeholder="Message"></textarea>
            <input type="submit" value="Submit" />
            </fieldset>
        </div>
    </form>
</Modal>
    )
}

export default Form

import React, { useState } from 'react'
import './Editable_Card.css'
import Modal from 'react-modal';

function Editable_Card(props) {
    const [showEdit, setShowEdit] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [description, setDescription] = useState("");
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function submitDetails(event) {
        event.preventDefault();
        if (props.onSubmit) props.onSubmit(inputValue, description)
        setShowEdit(false);
        setInputValue("");
        setDescription("");
        closeModal();
    }
    return (<>
        <p className={`editable_display ${props.displayClass || ""}`} onClick={openModal}>{props.text || "Add Card"}</p>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >

            <div className='editable'>
                <form className={`editable_edit ${""}`} onSubmit={submitDetails}>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Card Details</h2>

                    <input type="text" placeholder={props.placeholder || "Enter Item"} autoFocus value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} />

                    <textarea type="text" placeholder={"Enter Card Description"} value={description}
                        onChange={(e) => setDescription(e.target.value)} />



                    <div className="editable_edit_footer">
                        <button type='submit'>{props.buttonText || "Add"}</button>
                        <button onClick={closeModal}>close</button>
                    </div>

                    {/* */}

                </form>
            </div>

        </Modal>
    </>

    )
}

export default Editable_Card


import React, { useState } from 'react'

const AddLogModal = () => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <input type="text" name="message" value={message} onChange={ e => setMessage(e.target.value)}></input>
                    <label htmlFor="message" className="active">Log Message</label>
                </div>
            </div>
        </div>
    )
}

const modalStyle ={
    width: '75%',
    height: '75%'
}

export default AddLogModal;

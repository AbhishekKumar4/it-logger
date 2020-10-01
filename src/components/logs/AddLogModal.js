import React, { useState } from 'react'

const AddLogModal = () => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        console.log(message, tech, attention);
    }

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <input type="text" name="message" value={message} onChange={ e => setMessage(e.target.value)}></input>
                    <label htmlFor="message" className="active">Log Message</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field">
                    <select name="tech" value={tech} className="browser-default" onChange={ e => setTech(e.target.value)}>
                        <option value='' disabled>Select Technician</option>
                        <option value='Roger Smith'>Roger Smith</option>
                        <option value='Tim Timothy'>Tim Timothy</option>
                        <option value='Bryan Kendrick'>Bryan Kendrick</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="input-field">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in" checked={attention} value={attention}
                            onChange={e=> setAttention(!attention)}></input>
                            <span>Needs Attention</span>
                        </label>
                    </p>
                </div>
            </div>

            <div className="modal-footer">
                <a href="#" onClick={onSubmit} className="modal-close waves-effect waves-green btn-flat"></a>
            </div>
        </div>
    )
}

const modalStyle ={
    width: '75%',
    height: '75%'
}

export default AddLogModal;

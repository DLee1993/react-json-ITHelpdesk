import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
    const [name, setName] = useState("");

    const onSubmit = () => {
        if (name === "") {
            return M.toast({ html: "Please enter your name" });
        }
        console.log(name);
        //info - Clear fields
        setName("");
    };

    return (
        <div id='add-tech-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>New Technician</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor='name' className='active'>
                            Enter Name
                        </label>
                    </div>
                </div>
            </div>
            <div className='modal-footer'>
                <a
                    href='#!'
                    onClick={onSubmit}
                    className='modal-close waves-effect blue waves-light btn'
                >
                    Enter
                </a>
            </div>
        </div>
    );
};

const modalStyle = {
    width: "75%",
    height: "75%",
};

export default AddTechModal;

import React, { useState } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import { addTech } from "../../actions/techActions";

const AddTechModal = ({ addTech }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");

    const onSubmit = () => {
        if (firstName === "" || lastName === "") {
            return M.toast({ html: "Please enter your name" });
        }
        addTech({
            firstName,
            lastName,
        });
        M.toast({ html: `Added ${firstName} ${lastName} as a Technician` });
        //info - Clear fields
        setFirstName("");
        setlastName("");
    };

    return (
        <div id='add-tech-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4 style={{ marginBottom: "50px" }}>New Technician</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='firstName'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label htmlFor='firstName' className='active'>
                            First Name
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='lastName'
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)}
                        />
                        <label htmlFor='lastName' className='active'>
                            Last Name
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

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);

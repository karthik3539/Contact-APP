import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { addcontact, editContact } from "../redux/actions/contacts-action";

function AEcontact({ addcontact, editContactData, editContact }) {
  console.log(editContact);
  const [contact, setContact] = useState({
    name: "",
    pno: "",
    email: "",
  });

  useEffect(() => {
    setContact(editContactData);
  }, [editContactData]);

  const handleChange = (name, value) => {
    const oldcontact = { ...contact };
    oldcontact[name] = value;
    setContact(oldcontact);
  };

  const handleSubmit = () => {
    if (contact.id !== null && contact.id !== undefined) {
      editContact(contact, contact.id);
      let oldcontact = { ...contact };
      oldcontact.id = null;
      setContact(oldcontact);
    } else {
      addcontact(contact);
    }

    setContact({
      name: "",
      pno: "",
      email: "",
    });
    closeRef.current.click();
  };
  const closeRef = useRef();
  return (
    <div>
      {" "}
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">
            Add/Edit
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            ref={closeRef}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Name</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Example input"
                value={contact.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">pno</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input"
                value={contact.pno}
                onChange={(e) => handleChange("pno", e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">email</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input"
                value={contact.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => handleSubmit()}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStatetoprops = (state) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchtoprops = (dispatch) => {
  return {
    addcontact: (contact) => dispatch(addcontact(contact)),
    editContact: (contact, id) => dispatch(editContact(contact, id)),
  };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(AEcontact);

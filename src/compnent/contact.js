import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  deletecontact,
  getallcontacts,
  getcontact,
} from "../redux/actions/contacts-action";
import AEcontact from "./add-edit-contact";

function Contact({
  getallcontacts,
  contacts,
  getcontact,
  contact,
  deletecontact,
}) {
  useEffect(() => {
    getallcontacts();
  }, []);

  const hanndleDelte = (index) => {
    const confirm = window.confirm("are you sure want to delete");
    if (confirm) {
      deletecontact(index);
    }
  };
  return (
    <div>
      <div className="container d-flex flex-row justify-content-between mt-4">
        <h1>All contact</h1>
        <button
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Add Contact
        </button>
      </div>
      <div className="container">
        {contacts.length == 0 && (
          <p className="text-danger"> NO CONTACT FOUND</p>
        )}
        {contacts.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.no</th>
                <th scope="col">Name</th>
                <th scope="col">Pno</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{contact.name}</td>
                  <td>{contact.pno}</td>
                  <td>{contact.email}</td>
                  <td>
                    <button
                      className="btn btn-primary mr-10 "
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      onClick={() => getcontact(index)}
                    >
                      Edit
                    </button>{" "}
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => hanndleDelte()}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <AEcontact editContactData={contact} />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStatetoprops = (state) => {
  return {
    contacts: state.contacts,
    contact: state.contact,
  };
};

const mapDispatchtoprops = (dispatch) => {
  return {
    getallcontacts: () => dispatch(getallcontacts()),
    getcontact: (index) => dispatch(getcontact(index)),
    deletecontact: (index) => dispatch(deletecontact(index)),
  };
};

export default connect(mapStatetoprops, mapDispatchtoprops)(Contact);

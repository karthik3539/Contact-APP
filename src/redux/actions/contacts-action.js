export const getallcontacts = () => {
  return { type: "GETALLCONTACTS" };
};

export const addcontact = (contact) => {
  return { type: "ADDCONTACT", payload: contact };
};

export const editContact = (contact, id) => {
  return { type: "EDIT_CONTACT", payload: contact, id };
};

export const deletecontact = (id) => {
  return { type: "DELETE_CONTACT",  id };
};

export const getcontact = (index) => {
  return { type: "GET_CONTACT", index };
};

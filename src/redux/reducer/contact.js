const intialContacts = {
  contacts: [
    {
      name: "karthik",
      pno: "9632587412",
      email: "g@gmail.com",
    },
  ],
  contact: {},
};

export const contactreducer = (state = intialContacts, action) => {
  switch (action.type) {
    case "GetAllContacts":
      return { ...state };

    case "ADDCONTACT": {
      let contacts = [...state.contacts];
      contacts.push(action.payload);
      return { ...state, contacts };
    }
    case "EDIT_CONTACT": {
      let contacts = [...state.contacts];
      contacts[action.id] = action.payload;
      return { ...state, contacts };
    }

    case "DELETE_CONTACT": {
      let contacts = [...state.contacts];
      contacts.splice(action.id, 1);
      return { ...state, contacts };
    }

    case "GET_CONTACT": {
      return {
        ...state,
        contact: { ...state.contacts[action.index], id: action.index },
      };
    }
    default:
      return state;
  }
};

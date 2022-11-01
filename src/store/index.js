import { createStore } from "redux";

const initialFormData = {
  request: { value: "", isValid: false },
  address: {
    address: { value: "", isValid: false },
    address2: { value: "", isValid: false },
    state: { value: "", isValid: true },
    city: { value: "", isValid: false },
    zip: { value: "", isValid: false },
  },
  contact: {
    firstname: { value: "", isValid: false },
    lastname: { value: "", isValid: false },
    email: { value: "", isValid: false },
    phone: { value: "", isValid: true },
  },
  requestInfoFormIsValid: false,
  addressFormIsValid: false,
  contactFormIsValid: false,
};

const formReducer = (state = initialFormData, action) => {
  if (action.type === "Request number") {
    return {
      ...state,
      request: { value: action.value, isValid: action.isValid },
      requestInfoFormIsValid: action.isValid,
    };
  }

  if (action.type === "Address") {
    return {
      ...state,
      address: {
        ...state.address,
        address: { value: action.value, isValid: action.isValid },
      },
      addressFormIsValid:
        action.isValid &&
        state.address.address2.isValid &&
        state.address.city.isValid &&
        state.address.state.isValid &&
        state.address.zip.isValid,
    };
  }

  if (action.type === "Address2") {
    return {
      ...state,
      address: {
        ...state.address,
        address2: { value: action.value, isValid: action.isValid },
      },
      addressFormIsValid:
        state.address.address.isValid &&
        action.isValid &&
        state.address.city.isValid &&
        state.address.state.isValid &&
        state.address.zip.isValid,
    };
  }

  if (action.type === "City") {

   return {
    ...state,
    address: {
      ...state.address,
      city: { value: action.value, isValid: action.isValid },
    },
    addressFormIsValid:
        state.address.address.isValid &&
        state.address.address2.isValid &&
        action.isValid &&
        state.address.state.isValid &&
        state.address.zip.isValid,
   }
  }

  if (action.type === "State") {

    return {
      ...state,
      address: {
        ...state.address,
        state: { value: action.value, isValid: action.isValid },
        addressFormIsValid:
        state.address.address.isValid &&
        state.address.address2.isValid &&
        state.address.city.isValid &&
        action.isValid &&
        state.address.zip.isValid,
      },
    }
  }

  if (action.type === "Zip") {

    return {
      ...state,
      address: {
        ...state.address,
        zip: { value: action.value, isValid: action.isValid },
      },
      addressFormIsValid:
        state.address.address.isValid &&
        state.address.address2.isValid &&
        state.address.city.isValid &&
        state.address.state.isValid &&
        action.isValid,
    }
  }

  if (action.type === "First Name") {

    return {
      ...state,
      contact: {
        ...state.contact,
        firstname: { value: action.value, isValid: action.isValid },
      },
      contactFormIsValid:
        action.isValid &&
        state.contact.lastname.isValid &&
        state.contact.email.isValid &&
        state.contact.phone.isValid,
    }
  }

  if (action.type === "Last Name") {

   return {
    ...state,
    contact: {
      ...state.contact,
      lastname: { value: action.value, isValid: action.isValid },
    },
    contactFormIsValid:
        state.contact.firstname.isValid &&
        action.isValid &&
        state.contact.email.isValid &&
        state.contact.phone.isValid,
   }
  }

  if (action.type === "Email") {

    return {
      ...state,
      contact: {
        ...state.contact,
        email: { value: action.value, isValid: action.isValid },
      },
      contactFormIsValid:
        state.contact.firstname.isValid &&
        state.contact.lastname.isValid &&
        action.isValid &&
        state.contact.phone.isValid,
    }
  }

  if (action.type === "Phone") {

    return {
      ...state,
      contact: {
        ...state.contact,
        phone: { value: action.value, isValid: action.isValid },
      },
      contactFormIsValid:
        state.contact.firstname.isValid &&
        state.contact.lastname.isValid &&
        action.isValid &&
        state.contact.phone.isValid,
    }
  }

  if (action.type === "reset") {
    return initialFormData;
  }

  return initialFormData;
};

const store = createStore(formReducer);

export default store;

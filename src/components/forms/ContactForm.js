import Input from "../ui/Input";
import useInput from "../../hooks/use-input";
import { requiredRule } from "../../utils/input-validation-rules";

const ContactForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    hasError: firstNameHasError,
    errorMessage: firstNameErrorMessage,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
  } = useInput(
    { name: "First Name", validate: requiredRule },
    props.data.firstname.value
  );

  const {
    enteredValue: enteredLastName,
    hasError: lastNameHasError,
    errorMessage: lastNameErrorMessage,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
  } = useInput(
    { name: "Last Name", validate: requiredRule },
    props.data.lastname.value
  );

  const {
    enteredValue: enteredEmail,
    hasError: emailHasError,
    errorMessage: emailErrorMessage,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useInput(
    { name: "Email", validate: requiredRule },
    props.data.email.value
  );

  const {
    enteredValue: enteredPhone,
    hasError: phoneHasError,
    errorMessage: phoneErrorMessage,
    changeHandler: phoneChangeHandler,
    blurHandler: phoneBlurHandler,
  } = useInput(
    { name: "Phone", validate: requiredRule },
    props.data.phone.value
  );

  return (
    <form>
      <div className="row">
        <div className="col-md-6">
          <Input
            type="text"
            label="First Name"
            id="inputFirstName"
            handleChange={firstNameChangeHandler}
            handleBlur={firstNameBlurHandler}
            value={props.data.firstname.value}
            isValid={!firstNameHasError}
            errorMessage={firstNameErrorMessage}
            placeholder="First Name"
          ></Input>
        </div>
        <div className="col-md-6">
          <Input
            type="text"
            label="Last Name"
            id="inputLastName"
            placeholder="Last Name"
            handleChange={lastNameChangeHandler}
            handleBlur={lastNameBlurHandler}
            value={props.data.lastname.value}
            isValid={!lastNameHasError}
            errorMessage={lastNameErrorMessage}
          ></Input>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Input
            type="text"
            label="Email"
            id="inputEmail"
            placeholder="Email"
            handleChange={emailChangeHandler}
            handleBlur={emailBlurHandler}
            value={props.data.email.value}
            isValid={!emailHasError}
            errorMessage={emailErrorMessage}
          ></Input>
        </div>
        <div className="col-md-6">
          <Input
            type="text"
            label="Phone"
            id="inputPhone"
            placeholder="Phone"
            handleChange={phoneChangeHandler}
            handleBlur={phoneBlurHandler}
            value={props.data.phone.value}
            isValid={!phoneHasError}
            errorMessage={phoneErrorMessage}
          ></Input>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

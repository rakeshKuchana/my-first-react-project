import Input from "../ui/Input";
import useInput from "../../hooks/use-input";
import { requiredRule } from "../../utils/input-validation-rules";
import React from "react";

const RequestInfoForm = (props) => {

   const {enteredValue,
    hasError,
    errorMessage,
    changeHandler,
    blurHandler} =  useInput({name: 'Request number', validate: requiredRule}, props.value);



  return (
    <form>
      <Input
        type="text"
        id="requestNumber"
        label="Remedy Ticket Number"
        placeholder="Enter Remedy Ticket Number"
        handleChange={changeHandler}
        handleBlur={blurHandler}
        isValid={!hasError}
        errorMessage={errorMessage}
        value={props.value}
        name="request number"
      />
    </form>
  );
};

export default RequestInfoForm;

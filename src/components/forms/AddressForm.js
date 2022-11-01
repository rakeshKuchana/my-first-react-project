import Input from "../ui/Input";
import React from "react";
import useInput from "../../hooks/use-input";
import { requiredRule } from "../../utils/input-validation-rules";
import { useDispatch, useSelector } from "react-redux";

const AddressForm = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.address.state.value);

  const {
    enteredValue: enteredAddress,
    hasError: addressHasError,
    errorMessage: addressErrorMessage,
    changeHandler: addressChangeHandler,
    blurHandler: addressBlurHandler,
  } = useInput(
    { name: "Address", validate: requiredRule },
    props.addressFormData.address.value
  );

  const {
    enteredValue: enteredAddress2,
    hasError: address2HasError,
    errorMessage: address2ErrorMessage,
    changeHandler: address2ChangeHandler,
    blurHandler: address2BlurHandler,
  } = useInput(
    { name: "Address2", validate: requiredRule },
    props.addressFormData.address2.value
  );

  const {
    enteredValue: enteredCity,
    hasError: cityHasError,
    errorMessage: cityErrorMessage,
    changeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
  } = useInput(
    { name: "City", validate: requiredRule },
    props.addressFormData.city.value
  );

  const {
    enteredValue: enteredZip,
    hasError: zipHasError,
    errorMessage: zipErrorMessage,
    changeHandler: zipChangeHandler,
    blurHandler: zipBlurHandler,
  } = useInput(
    { name: "Zip", validate: requiredRule },
    props.addressFormData.zip.value
  );

  const stateChangeHandler = (event) => {
    console.log(event.target.value);
    dispatch({type: "State", value: event.target.value, isValid: true});
  }

  return (
    <form>
      <div className="row">
        <Input
          label="Address"
          type="text"
          id="inputAddress"
          placeholder="Address"
          handleChange={addressChangeHandler}
          handleBlur={addressBlurHandler}
          value={props.addressFormData.address.value}
          isValid={!addressHasError}
          errorMessage={addressErrorMessage}
        />
      </div>
      <div className="row">
        <Input
          label="Address 2"
          type="text"
          id="inputAddress2"
          placeholder="Address 2"
          handleChange={address2ChangeHandler}
          handleBlur={address2BlurHandler}
          value={props.addressFormData.address2.value}
          isValid={!address2HasError}
          errorMessage={address2ErrorMessage}
        />
      </div>

      <div className="row">
        <div className="col-md-6">
          <Input
            type="text"
            label="City"
            id="inputCity"
            placeholder="City"
            handleChange={cityChangeHandler}
            handleBlur={cityBlurHandler}
            value={props.addressFormData.city.value}
            isValid={!cityHasError}
            errorMessage={cityErrorMessage}
          ></Input>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputState">State</label>
          <select id="inputState" className="form-control" onChange={stateChangeHandler} value={state}>
            <option selected>Choose...</option>
            <option>TG</option>
            <option>AP</option>
          </select>
        </div>
        <div className="col-md-2">
          <Input
            type="text"
            label="Zip"
            id="inputZip"
            placeholder="Zip"
            handleChange={zipChangeHandler}
            handleBlur={zipBlurHandler}
            value={props.addressFormData.zip.value}
            isValid={!zipHasError}
            errorMessage={zipErrorMessage}
          ></Input>
        </div>
      </div>
    </form>
  );
};

export default AddressForm;

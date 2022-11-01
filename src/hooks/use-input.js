import { useState } from "react";
import {useDispatch} from "react-redux";


const useInput = (validateData, initialValue) => {

    const [enteredValue, setEnteredValue] = useState(initialValue);
    const [isTouched, setIsTouched] = useState(false);
    const dispatch = useDispatch();

    const errorMessage = validateData.validate(validateData.name, enteredValue);
  
    const enteredValueIsValid = errorMessage === '' ? true : false;
  
    const hasError =
      !enteredValueIsValid && isTouched;
  
    const changeHandler = (event) => {
        setEnteredValue(event.target.value);
        dispatch({type: validateData.name, value: event.target.value, isValid: validateData.validate(validateData.name, event.target.value) === '' ? true : false});
    };
  
    const blurHandler = () => {
      setIsTouched(true);
    };

    return {
        enteredValue,
        hasError,
        errorMessage,
        changeHandler,
        blurHandler
    }
}

export default useInput;
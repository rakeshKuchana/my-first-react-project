import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useSelector } from "react-redux";
import AddressForm from "../forms/AddressForm";
import ContactForm from "../forms/ContactForm";
import RequestInfoForm from "../forms/RequestInfoForm";

const steps = ["Request Number", "Address", "Contact"];

const NewServiceOrder = () => {
  const requestNumber = useSelector((state) => state.request.value);
  const addressFormData = useSelector((state) => state.address);
  const contactFormData = useSelector((state) => state.contact);
  const requestInfoFormIsValid = useSelector((state) => state.requestInfoFormIsValid);
  const addressFormIsValid = useSelector(state => state.addressFormIsValid);
  const contactFormIsValid = useSelector(state => state.contactFormIsValid);
  const [isLoading, setIsLoading] = React.useState(false);
  const[isError, setIsError] = React.useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const createServiceOrder = async (data) => {
    setIsLoading(true);
    setIsError(false);
    const response = await fetch("http://localhost:8080/service-orders", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    });

    setIsLoading(false);

  }

  const isStepOptional = (step) => {
    return false; //step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === 0 && requestInfoFormIsValid) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
    console.log(addressFormIsValid)

    if (activeStep === 1 && addressFormIsValid) {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }
  
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      }

      if (activeStep === 2 && contactFormIsValid) {
        
        const serviceOrderData = {
            requestNumber: requestNumber,
            address: {
                address: addressFormData.address.value,
                address2: addressFormData.address2.value,
                city: addressFormData.city.value,
                state: addressFormData.state.value,
                zip: addressFormData.zip.value, 
            },
            contact: {
                firstname: contactFormData.firstname.value,
                lastname: contactFormData.lastname.value,
                email: contactFormData.email.value,
                phone: contactFormData.phone.value

            }
        }



        console.log(serviceOrderData);
        createServiceOrder(serviceOrderData).catch(error => {
          setIsError(true);
          setIsLoading(false);
        });

        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }
  
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      }

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {activeStep + 1}
            {activeStep === 0 && <RequestInfoForm value={requestNumber}/>}
            {activeStep === 1 && (
              <AddressForm addressFormData={addressFormData}/>
            )}
            {activeStep === 2 && <ContactForm data={contactFormData}/>}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default NewServiceOrder;

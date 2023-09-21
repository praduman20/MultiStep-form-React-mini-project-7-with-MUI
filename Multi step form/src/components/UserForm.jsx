import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Succes from "./Success";

function UserForm() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    if (input === "firstName") {
      setFirstName(e.target.value);
    } else if (input === "lastName") {
      setLastName(e.target.value);
    } else if (input === "email") {
      setEmail(e.target.value);
    } else if (input === "occupation") {
      setOccupation(e.target.value);
    } else if (input === "city") {
      setCity(e.target.value);
    } else {
      setBio(e.target.value);
    }
  };

  const values = { firstName, lastName, email, occupation, city, bio };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );

    case 4:
      return <Succes />;
  }
}
export default UserForm;

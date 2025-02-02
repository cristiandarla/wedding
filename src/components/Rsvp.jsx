import React, { useState } from "react";
import { rsvp } from "../data";

const Rsvp = () => {

  const scriptUrl = rsvp.scriptUrl;
  const currentLocale = rsvp.currentLocale;
  const timeoutTime = rsvp.timeoutTime;
  const errorMessages = rsvp.errorMessages;
  const data = rsvp.data;
  
  const [formData, setFormData] = useState({
    name: "",
    numberOfPeople: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    numberOfPeople: "",
    phone: "",
  });

  const [message, setMessage] = useState(""); // State to hold the message

  const validateField = async (name, value) => {
    return new Promise((resolve) => {
      let errorMessage = "";

      if (!value.trim()) {
        errorMessage = errorMessages.mandatoryField;
      } else {
        switch (name) {
          case "name":
            if (!/^[A-Za-z\s]+$/.test(value)) {
              errorMessage = errorMessages.fullNameError;
            }
            break;
          case "numberOfPeople":
            if (!/^(1[0-9]|20|[1-9])$/.test(value)) {
              errorMessage = errorMessages.numberOfPeopleError;
            }
            break;
          case "phone":
            if(!/^\d{10,14}$/.test(value)){
              errorMessage = errorMessages.phoneError;
            }
            break;
          default:
            break;
        }
      }

      resolve(errorMessage);
    });
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    // Update the form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate the field
    const errorMessage = await validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = async () => {
    const newErrors = {};
    const results = [];

    // Validate all fields asynchronously
    await Promise.all(
      Object.keys(formData).map(async (key) => {
        const errorMessage = await validateField(key, formData[key]);
        newErrors[key] = errorMessage;
        results.push(`\'${formData[key]}`);
      })
    );

    results.push(`\'${(new Date()).toLocaleDateString(currentLocale)} ${(new Date()).toLocaleTimeString(currentLocale)}`);


    // Check if there are errors
    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      try {
        const response = await fetch(scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(results),
          mode: 'no-cors', // Enables CORS
        });

        setMessage(errorMessages.successRspv); // Success message
        setFormData({ name: '', numberOfPeople: '', phone: '' });
        // setTimeout(() => {
        //   setMessage("")
        // }, timeoutTime);
        
      } catch (error) {
        console.error('Error:', error);
        setMessage(errorMessages.errorSubmit); // Error message
        // setTimeout(() => {
        //   setMessage("")
        // }, timeoutTime);
      }
    } else {
      setMessage(errorMessages.errorRspv); // Error message
      // setTimeout(() => {
      //   setMessage("")
      // }, timeoutTime);
    }
    
  };


  return (
    <>
      <section id="rsvp" className="p-0 relative bg-[#e7ebde] w-full h-full">
        <div className="image-container h-full w-full absolute bg-cover bg-no-repeat bg-local bg-center"></div>

        <div className="h-full w-full py-8 flex flex-col justify-center items-center md:grid md:grid-cols-12 md:gap-0 text-center">
          <div className="z-10 h-full w-full pb-4 md:pb-0 md:col-span-1 md:flex md:flex-col md:justify-center md:items-center">
            <h1 className="font-gistesy text-3xl md:-rotate-90">Rsvp</h1>

          </div>

          <div className="z-20 w-full md:grid md:grid-cols-4 md:col-span-11">
            <div className="w-full pt-4 text-center md:col-span-4">
              <p className="text-lg font-tt-commons-pro-thin-italic">{message}</p>
            </div>
            {data.map((entry, index) => {
              if (entry.type === "button") {
                return (
                  <div
                    key={index}
                    className="w-full h-full px-4 py-2 md:px-3 md:col-span-1"
                  >
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="w-full bg-white rounded-md py-2"
                    >
                      <p>{entry.label}</p>
                    </button>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="w-full h-full px-4 py-2 md:px-1 md:col-span-1"
                  >
                    <input
                      type={entry.type}
                      name={entry.name}
                      placeholder={entry.placeHolder}
                      value={formData[entry.name] || ""}
                      onChange={handleInputChange}
                      className={`w-full rounded-md px-2 py-2 ${
                        errors[entry.name] ? "border-2 border-[#9e2a2b]" : ""
                      }`}
                    />
                    {errors[entry.name] && (
                      <p className="text-[#9e2a2b] text-sm mt-1">
                        {errors[entry.name]}
                      </p>
                    )}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>

    </>
  );
};

export default Rsvp;
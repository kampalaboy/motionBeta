"use client"
// import the necessary modules
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BidForm = () => {
  // initialize the router and state
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // handle form input changes
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    // Check if the username includes the required character
    if (name === "username" && !value.startsWith("*")) {
      setErrorMessage("Username must include the character '*'");
    } else {
      setErrorMessage(""); // Clear the error message if the condition is met
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const res = await fetch("api/bid", {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.reload();
      router.push('/');
    }
  };

  // render the form
  return (
    <>
      <form
        onSubmit={handleSubmit}
        method='post'
        className="flex flex-col gap-3 w-1/2"
      >
        <label>UserName</label>
        <input
          id='username'
          name='username'
          placeholder='*motion'
          type='text'
          onChange={handleChange}
          required={true}
          value={formData.username || ''}
          className="m-2  rounded"
        />
         <label>Phone Number</label>
        <input
          id='phonenumber'
          name='phonenumber'
          placeholder='+...'
          type='number'
          onChange={handleChange}
          required={true}
          value={formData.phoneNumber}
          className="m-2  rounded"
        />
        <input
          type='submit'
          value='Create Trader Acc.'
          className='btn btn-secondary bg-green-600'
        />
      </form>
      <p className="color-red-100">{errorMessage}</p>
    </>
  );
};

export default BidForm;

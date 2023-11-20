import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm, Controller } from 'react-hook-form'; 
import Swal from 'sweetalert2';  

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";  
import ReactFlagsSelect from "react-flags-select";
   

import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
const LeadsForm = () => { 
  
  const { register, handleSubmit, control, formState: { errors } } = useForm();    

  const minDate = new Date().getFullYear() + "-" +  parseInt(new Date().getMonth() + 1 ) + "-" + new Date().getDate(); 

  const scriptUrl = 'https://sheet.best/api/sheets/3ffa4958-13ab-4063-81ca-cc7e0434db5a'; 
  const apiUrl = ""; 
    
  const onSubmit = (data) => {  
    console.log(data); 
      Swal.fire({
        title: "Thank you!",
        text: "for sending the email with the requested information",
        icon: "success"
    });
   
    // fetch(apiUrl, 
    //   {    
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   })
    //   .then((r) => r.json())
    //   .then((data) => {
    //     // The response comes here
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     // Errors are reported there
    //     console.log(error);
    //   }); 

    fetch(scriptUrl, 
    {    
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((r) => r.json())
    .then((data) => {
      // The response comes here
      console.log(data);
    })
    .catch((error) => {
      // Errors are reported there
      console.log(error);
    }); 

 
  }
 

  // console.log(errors); 

  return (
    <section id="leads" className='leads' >
        <div className="container">
          <div className="row">
            <h4 class="text-bold title">Find a Trip</h4>
            <Form className='leads-form' onSubmit={handleSubmit(onSubmit)}>

              {/* Full Name */}
              <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control name="fullname" {...register('fullname', { required: true })} type="text" placeholder="Full Name" required/>
                  {/* {errors.fullname && errors.fullname.type === "required" && (
                    <span style={{ color: 'red', fontSize: '13px'}}>This is required</span>
                  )} */}
              </Form.Group>

              {/* Phone */}
              <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                  <Form.Label>Phone</Form.Label>
                  {/* <Form.Control name="phone" {...register('phone', { required: true })} type="tel" placeholder="Phone" required />   */}
                  {/* <PhoneInput country={"us"} {...register('phone', { required: true })}  />   */}
                  <Controller
                      name="phone"
                      control={control}
                      // rules= {{ required: true, message: 'Required' }} 
                      render={({ field: { onChange, value } }) => (
                        <PhoneInput
                          country={"us"}
                          onChange={onChange} 
                          value={value}  
                          inputProps={{ 
                            required: true, 
                          }}
                        />
                      )}
                  />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" {...register('email', { required: true })} type="email" placeholder="Email Address" required />
                  {/* {errors.email && errors.email.type === "required" && (
                    <span style={{ color: 'red', fontSize: '13px'}}>This is required</span>
                  )} */}
              </Form.Group>

              {/* Countries  */}
              <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                  <Form.Label>Country</Form.Label>
                  <Form.Control name="country" {...register('country', { required: true })} type="country" placeholder="Your Country" required />
                  {/* {errors.country && errors.country.type === "required" && (
                    <span style={{ color: 'red', fontSize: '13px'}}>This is required</span>
                  )}    */} 
              </Form.Group>

              {/* Departure Day */}
              <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                  <Form.Label>Departure Day</Form.Label> 
                  <Form.Control name="dep_day" {...register('dep_day', { required: true })} min={minDate} type="date" required />
                  {/* {errors.dep_day && errors.dep_day.type === "required" && (
                    <span style={{ color: 'red', fontSize: '13px'}}>This is required</span>
                  )} */}
                   {/* <Controller
                      name="dep_day"
                      control={control} 
                      render={({ field: { onChange, value } }) => (
                        <ReactDatePicker  
                          className='form-control' 
                          onChange={onChange}
                          selected={value}
                          value={value}
                          placeholderText={'mm/dd/yyyy'} 
                          required
                        />
                      )}
                   /> */}
              </Form.Group>

              {/* Arrival Date */}
              <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                  <Form.Label>Arrival Date</Form.Label>
                  <Form.Control name="arr_day" {...register('arr_day', { required: true })} min={minDate} type="date" required />
                  {/* {errors.arr_day && errors.arr_day.type === "required" && (
                    <span style={{ color: 'red', fontSize: '13px'}}>This is required</span>
                  )} */}

                  {/* <Controller
                    name="arr_day"
                    control={control} 
                    render={({ field: { onChange, value } }) => (
                      <ReactDatePicker  
                        className='form-control' 
                        onChange={(date) => setStartDate(date)}
                        selected={value}
                        value={value}
                        placeholderText={'mm/dd/yyyy'} 
                        required
                      />
                    )}
                  />          */}
 
              </Form.Group> 

              <Form.Group>
                <Button type="submit" className='cta text-center'>Find now !</Button> 
              </Form.Group>

            </Form>
          </div>
        </div>
    </section>
  )
}

export default LeadsForm
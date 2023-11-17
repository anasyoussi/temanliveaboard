import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import { PhoneInput } from "react-contact-number-input";



const LeadsForm = () => { 
  const { register, handleSubmit, formState: { errors } } = useForm();    
  // const scriptUrl = 'https://script.google.com/macros/s/AKfycbxpuo1WQ4iEMfDRC3dT1_9jHz7e7Od4eBMNiVyUSs1mc_VdLpYl-sAZUU5CEkMIqVl0/exec';  
  const scriptUrl = 'https://sheet.best/api/sheets/3ffa4958-13ab-4063-81ca-cc7e0434db5a'; 

  const onSubmit = (data) => { 
    console.log(data); 
    // fetch(scriptUrl, 
    // {    
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then((r) => r.json())
    // .then((data) => {
    //   // The response comes here
    //   console.log(data);
    // })
    // .catch((error) => {
    //   // Errors are reported there
    //   console.log(error);
    // }); 
  }

  // console.log(errors); 

  return (
    <section className='leads'>
        <div className="container">
          <div className="row">
            <h4 class="text-bold title">Find a Trip</h4>
            <Form className='leads-form' onSubmit={handleSubmit(onSubmit)}>

              {/* Full Name */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control name="fullname" {...register('fullname', { required: true })} type="text" placeholder="Full Name" />
                  {errors.fullname && errors.fullname.type === "required" && (
                    <span style={{ color: 'red', fontSize: '13px'}}>This is required</span>
                  )}
              </Form.Group>

              {/* Phone */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control name="phone" {...register('phone', { required: true })} type="tel" placeholder="Phone" />
                  {errors.phone && errors.phone.type === "required" && (
                    <span style={{ color: 'red', fontSize: '13px'}}>This is required</span>
                  )}    
                  {/* <PhoneInput containerClass="form-control" /> */}
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" {...register('email', { required: true })} type="email" placeholder="Email Address" />
                  {errors.email && errors.email.type === "required" && (
                    <span style={{ color: 'red', fontSize: '13px'}}>This is required</span>
                  )}
              </Form.Group>

              {/* Countries  */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Country</Form.Label>
                  <Form.Control name="country" {...register('country', { required: true })} type="text" placeholder="Your Country" />
                  {errors.country && errors.country.type === "required" && (
                    <span style={{ color: 'red', fontSize: '13px'}}>This is required</span>
                  )}
              </Form.Group>

              {/* Departure Day */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Departure Day</Form.Label>
                  <Form.Control name="dep_day" {...register('dep_day', { required: true })} type="date"/>
                  {errors.dep_day && errors.dep_day.type === "required" && (
                    <span style={{ color: 'red', fontSize: '13px'}}>This is required</span>
                  )}
              </Form.Group>

              {/* Arrival Date */}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Arrival Date</Form.Label>
                  <Form.Control name="arr_day" {...register('arr_day', { required: true })} type="date"/>
                  {errors.arr_day && errors.arr_day.type === "required" && (
                    <span style={{ color: 'red', fontSize: '13px'}}>This is required</span>
                  )}
              </Form.Group> 

              <Form.Group>
                <Button type="submit" className='button text-center'>Find now !</Button> 
              </Form.Group>

            </Form>
          </div>
        </div>
    </section>
  )
}

export default LeadsForm
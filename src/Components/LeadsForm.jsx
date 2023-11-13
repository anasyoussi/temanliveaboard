import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const LeadsForm = () => {
  return (
    <section className='leads'>
        <div className="container">
          <div className="row">
            <h4 class="text-bold title">Find a Trip</h4>
            <Form className='leads-form'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="email" placeholder="First Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="phone" placeholder="Phone" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email Address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Departure Day</Form.Label>
                  <Form.Control type="date"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Arrival Date</Form.Label>
                  <Form.Control type="date"/>
              </Form.Group> 
              <Form.Group>
                <Button className='button text-center'>Find now !</Button> 
              </Form.Group>
            </Form>
          </div>
        </div>
    </section>
  )
}

export default LeadsForm
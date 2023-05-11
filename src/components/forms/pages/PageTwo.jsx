import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import validator from "validator";

const PageTwo = ({ nextStep, handleFormData, prevStep, values,image,imageChange }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (validator.isEmpty(values.address) ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="Enter you Address here">
        <Form.Control
        autoComplete="off"
          as="textarea"
          name="address"
          type="text"
          defaultValue={values.address}
          onChange={handleFormData("address")}
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  Address is required !
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload picture</Form.Label>
              <Form.Control
                autoComplete="off"
                style={{ border: error ? "2px solid red" : "" }}
                defaultValue={image}
                type="file"
                onChange={imageChange}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  Image is required !

                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Go Back
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default PageTwo;

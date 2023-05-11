import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
const PageOne = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName) ||
      validator.isEmpty(values.email) ||
      validator.isEmpty(values.phone)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                autoComplete="off"
                style={{ border: error ? "2px solid red" : "" }}
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleFormData("firstName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  FirstName is required !
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                autoComplete="off"
                style={{ border: error ? "2px solid red" : "" }}
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder="Last Name"
                onChange={handleFormData("lastName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  LastName is required !
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoComplete="off"
                style={{ border: error ? "2px solid red" : "" }}
                name="email"
                type="email"
                defaultValue={values.email}
                placeholder="email"
                onChange={handleFormData("email")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  Email is required !
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>PhoneNo</Form.Label>
              <Form.Control
            autoComplete="off"
                style={{ border: error ? "2px solid red" : "" }}
                name="phone"
                defaultValue={values.phone}

                type="number"
                placeholder="phone no"
                onChange={handleFormData("phone")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  PhoneNumber is required !
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Next Step
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PageOne;

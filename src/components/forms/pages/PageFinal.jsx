import React from "react";
import { Card } from "react-bootstrap";

const PageFinal = ({ values,image }) => {

    //destructuring the object from values
  const { firstName, lastName, email,phone,address} = values;

  return (
    <>
    <h1> User Details</h1>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
          <p>
            <strong>Phone :</strong> {phone}{" "}
          </p>
          <p>
            <strong>Address :</strong> {address}{" "}
          </p>
          <p>
            <strong>Image :</strong> 
            <img
              src={URL.createObjectURL(image)}
             height={200}
              alt="Thumb"
            
            />{" "}
          </p>
          
        </Card.Body>
      </Card>
    </>
  );
};

export default PageFinal;

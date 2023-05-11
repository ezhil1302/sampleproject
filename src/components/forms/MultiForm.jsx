import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import './pages/MultiForm.css'
import PageTwo from "./pages/PageTwo";
import PageOne from "./pages/PageOne";
import PageFinal from "./pages/PageFinal";

function MultiForm() {
  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone:"",
    address:"",
  })

const[image,setImage]=useState('')

  const nextStep = () => {
    setPage(page + 1);
  };

  const prevStep = () => {
    setPage(page - 1);
  };



  const handleInputData = input => e => {
    const {value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  
  }


  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };



  switch (page) {
    case 1:
      return (
        <div className="App form-container ">
          <h1 className="mt-2">USER REGISTRATION</h1>
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <PageOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <PageTwo 
                  image={image}
                  imageChange={imageChange}                
                nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <PageFinal values={formData} image={image} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    default:
      return (
        <div className="App">
        </div>
      );
  }
}

export default MultiForm;

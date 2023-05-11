import React, { useEffect, useState } from 'react'
import { Table,Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import './pages/UserDetail.css'

function UserDetail() {
  const[loading,setLoading]=useState(false)
  const[post, setPost]=useState([])
  const[error, setError]=useState(false)
  const [show, setShow] = useState(false);
  const[showData, setShowData]=useState(
    {
      id:'',
      title:'',
      userId:'',
      body:''
    }
  )
  

   useEffect(()=>{
   const getData = async( ) =>{
      setLoading(true);
      setError(false);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data =  await res.json()
        setPost(data)
      }
      catch(error){
        setError(true)
      }
      setLoading(false)
   }   
    getData()
   },[])


   const showDetails = (id) =>{
         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then(res=>res.json())
         .then(res=>setShowData(res))
         setShow(true);
   }

   const handleClose = () => setShow(false);
 
  return (
    <React.Fragment>
     {error && <p>Something went wrong</p>}

{loading ?(<p>Loading....</p>):(

    <Table striped size="sm" className='table'>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>Details</th>

        </tr>
      </thead>
      <tbody>
      {post.map((item)=>(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td> <Button variant="success" onClick={(e)=>showDetails(item.id)}>
             View</Button></td>
  
        </tr>
      ))}
        </tbody>
    </Table>


)}
     
     <Modal show={show} onHide={handleClose} className='showview' >
        <Modal.Header closeButton className='bg-primary modal-header'>
          <Modal.Title >User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body' >
    
    <p><span>User id :</span>   {showData.id}</p>
    <p> <span>User title :</span> {showData.title}</p>
    <p><span>User userId : </span>{showData.userId}</p>
    <p><span>User body :</span> {showData.body}</p>
        </Modal.Body>
        <Modal.Footer>
          <hr/>
        </Modal.Footer>
      </Modal>
     
    </React.Fragment>
  )
}

export default UserDetail
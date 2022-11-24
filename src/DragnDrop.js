import React, {useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import cloud from './images/cloud.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function DragnDrop() {
    const[files,setFiles]=useState([])
    
  const{getRootProps,getInputProps}=useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles)=>{
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
      )
      )
    },
    
  })
  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "420px",height:"250px",marginLeft:"63px",marginTop:"25px" }} alt="preview" />
      </div>
    </div>
  ))
 

    return (
        <div className='App' >
          
          
          <Form>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <div id="tool">
          <div className="drag-box">
            <div className="drop-box">
          {/* <div className="tool-box"> */}
            <div {...getRootProps()}>
            
          <input {...getInputProps()} style={{height:"250px",}}/>
          <h6>Or</h6>
          <img src={cloud} alt="" style={{width:"100px",marginLeft:"150px"}}/>
          <p>Drag&Drop images</p>
          </div>
          </div>
          <div className="row" style={{marginTop:"50px"}}>
            
          
          </div>
         
        </div>
        </div>
        </div>
      );
}

export default DragnDrop
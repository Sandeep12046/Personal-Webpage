import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Aboutsty.css'
import { Card } from 'react-bootstrap';
import Navi from './Navi';
import profile from './images/profile.jpeg'
import { AiFillInstagram } from "react-icons/ai";

// import { useEffect } from 'react';
// import { Axios } from 'axios';
export default function Home() {
// const [avatar,setAvatar]=useState([]);
//   useEffect(()=>{
//     Axios.get("https://api.github.com/users/Sandeep12046/repos").then((response)=>{
//       setAvatar(response.data);
//     })
//   })
  return (
      <>
    <Navi/>
  
   
    <Card style={{ width: '62rem' }}>
  <Card.Body>
    <Card.Title>About Me</Card.Title>
    <Card.Text><Card style={{ width: '15rem' }}>
  <Card.Body>
  
    <Card.Text>
      <figure className='positive-relative'>
        <img src={profile} alt="profile" className='img-fluid'/>
        </figure><AiFillInstagram/>
    </Card.Text>
    
  </Card.Body>
</Card>
<p>Hi, I am Sandeep N. I am a engineering graduate specialized in computer science & engineering.
Along with my degree, I completed "MERN stack development" course in online, has helped me in developing my projects. 
My goal is to build a successfull career as a Developer.</p>
    </Card.Text>
  </Card.Body>
</Card>

 

    </>
  )
}

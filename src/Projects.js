import React, { useEffect, useState } from 'react'
import Axios from "axios"
import "./Style.css"
import {Card} from 'react-bootstrap'
import Navi from './Navi';
export default function Projects() {
const [project,setProject]=useState([]);

    // function projectData(){
    //     Axios.get("https://api.github.com/users/Sandeep12046/repos").then((response)=>{
    //         setProject(response.data)
    //     })
    // }
    
    useEffect(()=>{
      Axios.get("https://api.github.com/users/Sandeep12046/repos").then((response)=>{
        setProject(response.data);
      })
    })
  return (
    <>
    <div>
   <Navi/>
   </div>
    <h1>Projects</h1>
    <p>plz wait projects are loading from github</p>
    
    {/* <button type="submit" onClick={()=>{projectData()}}>Projecgts</button> */}
    {project.map((pdata)=>{
      return(
        <>
        <Card border="primary" style={{ width: '55rem' }}>
    
    <Card.Body>
      <Card.Title>{pdata.name}</Card.Title>
      <Card.Text>
      {pdata.description}
      </Card.Text>
    </Card.Body>
  </Card>
        </>
      )
    })}
    </>
  )
}

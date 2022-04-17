import React from 'react'
import {AiOutlineLink} from "react-icons/ai"
import {MdSimCardDownload} from "react-icons/md"
import Navi from './Navi'
export default function Resume() {
  return (
    <>
    
    <div className='title'>
      <Navi/>
    <center><h1>Resume</h1></center>
    <h2><a href='https://drive.google.com/file/d/17xxtXpYddLUwNCVhkdGi6knN6sDHMFsK/view?usp=drivesdk' download> <button type="button" class="btn btn-outline-primary">Download Resume</button></a></h2>
    </div>
    <div className='language'>
      <h4>Language</h4>
      <li>English</li>
      <li>Kannada</li>
      <li>Telugu</li>
    </div>
    <div className='education'>
      <h2><center>Education</center></h2><br/>
      <p>2018-2021</p>
      <h4>PES IT(South Campus)</h4>
      <h5><i>Computer Science & Engineering</i></h5>
      <p>2012-2015</p>
      <h4>B.T.L Polytechnic</h4>
      <h5><i>Computer Science & Engineering/(Diploma)</i></h5>
      <p>2011-2012</p>
      <h4>New Indus Valley Residential High School</h4>
      <h5><i>Karnataka Secondary Education -(10th)</i></h5>
    </div>
    <div className='skills'>
      <h2><center>Skills</center></h2>
      <br/>
      <h4>Programming Language</h4><br/>
      <li>Html</li>
      <li>Css</li>
      <li>Mysql</li>
      <li>JavaScript</li>
      <li>React js</li>
      <li>Node js/Express js</li>
    </div>
    <div className='course'>
      <h2><center>Course</center></h2><br/>
      <li>"MERN Stack Development",Certified Training at "Tutedude".</li>
      <p></p>
    </div>
    <div className='certificates'>
      <h2><center>Certificates</center></h2><br/>
      <li>"MERN stack development" Certified Training at "Tutedude".<a href="https://drive.google.com/file/d/11Ju1uJfqt8H87HKym_5khcmQKXLKOKw6/view?usp=drivesdk" alt="tutedude"><AiOutlineLink/></a></li>
    </div>
    </>
  )
}

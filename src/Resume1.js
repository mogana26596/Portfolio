import './App.css';
import Topbar from './Topbar';
import Footer from './Footer';

function Resume1() {
return (
<div>
  <Topbar/>
  <div className="container">
    <div className="row">
      <div className="col-5">
       <h1 className="head">Education</h1> 
       <p>👉 Full Stack Developer (Front End & Back End Development) in GUVI GEEK NETWORK PRIVATE LIMITED</p>
       <p>July 2022 - December 2022</p>
       <br/>
       <p>👉 B.Tech (ECE) in Christ College of Engineering & Technology under Pondicherry University with 83%</p>
       <p>2013 - 2017</p>
       <br/>
       <p>👉 HSC in Blue Stars Higher Secondary School with 86%</p>
       <p>2012 - 2013</p>
       <br/>
       <p>👉 SSLC in Vesley English High School with 83%</p>
       <p>2010 - 2011</p>
      </div> 
      <div className="col-1"></div>
      <div className="col-6">
      <h1 className="head">Course Completion</h1> 
      <p>👉 HTML & CSS Course in GUVI GEEK NETWORK PRIVATE LIMITED</p>
      <img style={{margin:"25px 10px 20px 10px"}} src="./assets/GuviCertification - Z1712AK6Lp11626kX3.png" className="img" alt="..." width="550" height="310"/>

      <p>👉 AWS Technical Essentials Course in AWS Training and Certification</p>
      <img style={{margin:"25px 10px 20px 10px"}} src="./assets/aws.png" className="img" alt="..." width="550" height="310"/>
      </div>
      <div>
      <a href="./assets/Resume.pdf" target="_blank"><button style={{margin:"30px 500px",fontSize:"20px"}} type="button" className="btn btn-light d-flex justify-content-center"><i className="fa fa-download fa-3x" aria-hidden="true"></i>Click Here to view Resume</button></a>
         </div>
    </div> 
  </div>
  
<Footer/>
</div>
  );
}

export default Resume1;

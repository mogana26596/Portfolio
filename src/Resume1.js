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
      <div className="col-5">
      <h1 className="head">Course Completion</h1> 
      <p>👉 HTML & CSS Course in GUVI GEEK NETWORK PRIVATE LIMITED</p>
      <img style={{margin:"70px 15px -90px 15px"}} src="./assets/GuviCertification - Z1712AK6Lp11626kX3.png" className="img" alt="..." width="480" height="310"/>

      <a href="./assets/Resume.pdf" download="Resume.pdf"><button style={{margin:"50%",fontSize:"20px"}} type="button" className="btn btn-primary d-md-flex justify-content-md-center" ><i className="fa fa-download fa-4x" aria-hidden="true"></i> Download Resume</button></a>
         </div>
    </div> 
  </div>
  
<Footer/>
</div>
  );
}

export default Resume1;

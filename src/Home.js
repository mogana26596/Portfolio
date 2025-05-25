import './App.css';
import Topbar from './Topbar';
import Footer from './Footer';

function Home() {
return (
<div>
  <Topbar/>
   <div className="container">
    <div className="row">
      <div className="col-6">
          <img src="/images/fl.gif" alt="" className= "image" width="550" height="680"/>
      </div>
      <div style={{margin:"50px 0px"}} className="col-6">
        <h1 style={{fontSize:"50px"}}><b>Welcome to My Portfolio!</b></h1>
        <h1>I'm <span><b>MOGANA</b></span></h1>
        <h1><span>Full Stack Developer</span></h1>      
        <a href="./assets/Resume.pdf" target="_blank"><button style={{margin:"30px 0px",fontSize:"20px", color: "white"}} type="button" className="btn btn-outline-info d-flex justify-content-center"><i className="fa fa-download fa-2x" aria-hidden="true"></i>Click Here to view Resume</button></a>
      </div>
    </div> 
   </div>
  <Footer/>
</div>
);
}

export default Home;

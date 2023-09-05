import './App.css';
import Topbar from './Topbar';
import Footer from './Footer';

function Project() {
return (
<div>
  <Topbar/>
  <h1 className="head">My Recent Works</h1> 
  <div className="container mb-5" style={{maxWidth: "70rem",margin:"90px"}}>
  <div className="row g-8">
    <div className="col-md-6">
       <img style={{margin:"120px 15px"}} src="/images/StackOverflow.png" className="img" alt="..." width="480" height="310"/>
    </div>
    <div className="col-md-6">
        <a href="https://grand-crostata-4460ff.netlify.app/" className="head btn btn-link" target="_blank">Stack overflow clone</a>
        <p>I have created this website for Hackathon. This website is basically the frontend and backend clone which is created with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express JS, NodeJS and MongoDB . This website  is a question and answer website. It features questions and answers on a wide range of topics in computer programming.</p>    
        <a href="https://github.com/mogana26596/webcodereact" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Stack overflow clone - Frontend</a>
        <a href="https://github.com/mogana26596/webcodenodejs" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Stack overflow clone - Backend</a> 
        <a href="https://hackthon1.herokuapp.com" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Stack overflow clone - Deployed URL</a> 
    </div>
  </div>
</div>

<div className="container mb-5" style={{maxWidth: "70rem",margin:"90px"}}>
  <div className="row g-8">
    <div className="col-md-6">
      <img style={{margin:"80px 15px"}} src="/images/airbnb.png" alt="Icon" className="img" width="480" height="350"/> 
    </div>
    <div className="col-md-6">
        <a href="https://vocal-bombolone-9502db.netlify.app" className="head btn btn-link" target="_blank">Airbnb Clone</a>
        <p>I have created this website for Homestay reserving. This website is basically the frontend and backend clone which is created with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express JS, NodeJS and MongoDB. Airbnb is Air Bed and Breakfast. This website operates an online marketplace focused on short-term homestays and experiences.</p>    
        <a href="https://github.com/mogana26596/Airbnb-frontend" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Airbnb clone - Frontend</a>
        <a href="https://github.com/mogana26596/Airbnb-backend" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Airbnb clone - Backend</a>
        <a href="https://airbnb-backend21.onrender.com" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Airbnb clone - Deployed URL</a> 
    </div>
  </div>
</div>
 
<div className="container mb-5" style={{maxWidth: "70rem",margin:"90px"}}>
  <div className="row g-8">
    <div className="col-md-6">
      <img style={{margin:"110px 15px"}} src="/images/library.jpg" className="img" alt="..." width="480" height="310"/>
    </div>
    <div className="col-md-6">
    <a href="	https://tranquil-stroopwafel-3b621b.netlify.app" className="head btn btn-link" target="_blank">Library Management Clone</a>
    <p>I have created this website to manage the movement of books and maintain records of the members in a library using formik. This website is basically the frontend and backend clone which is created with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express JS, NodeJS and MongoDB. In this project, admin and admin allowed librarian only should access this software.</p>    
    <a href="https://github.com/mogana26596/libraryreact" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Library Management clone - Frontend</a>
        <a href="https://github.com/mogana26596/librarynodejs" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Library Management clone - Backend</a> 
        <a href="https://librarymanagement-backend.onrender.com" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Library Management clone - Deployed URL</a> 
    </div>
  </div>
</div>

<div className="container mb-5" style={{maxWidth: "70rem",margin:"90px"}}>
  <div className="row g-8">
    <div className="col-md-6">
      <img style={{margin:"110px 15px"}} src="/images/user.png" className="img" alt="..." width="480" height="310"/>
    </div>
    <div className="col-md-6">
    <a href="	https://boisterous-bonbon-f8afd0.netlify.app/" className="head btn btn-link" target="_blank">User and User Profile Management Clone</a>
    <p>I have created this website to record user details and user profiles. This website is basically the frontend and backend clone which is created with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express JS, NodeJS and MongoDB. In this project, admin only should access this software.</p>    
    <a href="https://github.com/mogana26596/userreact" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">User Management clone - Frontend</a>
        <a href="https://github.com/mogana26596/usernodejs" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">User Management clone - Backend</a> 
        <a href="https://usermanagement-backend.onrender.com" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">User Management clone - Deployed URL</a> 
    </div>
  </div>
</div>

<Footer/>
</div>
  );
}

export default Project;

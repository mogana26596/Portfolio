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
       <img style={{margin:"120px 15px"}} src="https://upload.wikimedia.org/wikipedia/commons/a/a5/StackOverflow.com_Top_Questions_Page_Screenshot.png" className="img" alt="..." width="480" height="310"/>
    </div>
    <div className="col-md-6">
        <a href="https://grand-crostata-4460ff.netlify.app/" className="head btn btn-link" target="_blank">Stack overflow clone</a>
        <p>I have created this website for Hackathon. This website is basically the frontend and backend clone which is created with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express JS, NodeJS and MongoDB . This website  is a question and answer website. It features questions and answers on a wide range of topics in computer programming.</p>    
        <a href="https://github.com/mogana26596/webcodereact" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Stack overflow clone - Frontend</a>
        <a href="https://github.com/mogana26596/webcodenodejs" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Stack overflow clone - Backend</a>
    </div>
  </div>
</div>

<div className="container mb-5" style={{maxWidth: "70rem",margin:"90px"}}>
  <div className="row g-8">
    <div className="col-md-6">
      <img style={{margin:"80px 15px"}} src="https://www.spinxdigital.com/blog/wp-content/uploads/2016/12/Temple-Airbnb-Logo.png" className="img" alt="..." width="480" height="350"/>
    </div>
    <div className="col-md-6">
        <a href="https://vocal-bombolone-9502db.netlify.app" className="head btn btn-link" target="_blank">Airbnb Clone</a>
        <p>I have created this website for Homestay reserving. This website is basically the frontend and backend clone which is created with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express JS, NodeJS and MongoDB. Airbnb is Air Bed and Breakfast. This website operates an online marketplace focused on short-term homestays and experiences.</p>    
        <a href="https://github.com/mogana26596/Airbnb-frontend" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Airbnb clone - Frontend</a>
        <a href="https://github.com/mogana26596/Airbnb-backend" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Airbnb clone - Backend</a>
    </div>
  </div>
</div>
 
<div className="container mb-5" style={{maxWidth: "70rem",margin:"90px"}}>
  <div className="row g-8">
    <div className="col-md-6">
      <img style={{margin:"40px 15px"}} src="https://rajeshnaik.com/images/Song_Ice_Fire.png" className="img" alt="..." width="480" height="310"/>
    </div>
    <div className="col-md-6">
    <a href="	https://elegant-chebakia-7bae32.netlify.app" className="head btn btn-link" target="_blank">An API of Ice and Fire</a>
    <p>I have created this website by API fetched using async/await. This website is basically the frontend clone which is created with HTML, CSS, JavaScript and DOM. In this project, I have displayed the books details from API.</p>    
    <a href="https://github.com/mogana26596/Webcode" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Ice and Fire API - Frontend</a>
    </div>
  </div>
</div>

<div className="container mb-5" style={{maxWidth: "70rem",margin:"90px"}}>
  <div className="row g-8">
    <div className="col-md-6">
      <img style={{margin:"120px 15px"}} src="https://www.bootstrapdash.com/wp-content/uploads/2020/09/developing-the-app.png" className="img" alt="..." width="480" height="310"/>
    </div>
    <div className="col-md-6">
    <a href="https://glittering-pavlova-4b2943.netlify.app/" className="head btn btn-link text" target="_blank">Admin Dashboad with Student & Teacher Management</a>
    <p>I have created this website for Student & Teacher Management. This website is basically the frontend clone which is created with HTML, CSS, JavaScript and ReactJS. In this project, I have displayed the students & teacher details by using CRUD Operation with context API and react Hooks.</p>    
    <a href="https://github.com/mogana26596/day29" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Admin Dashboad - Frontend</a>
    </div>
  </div>
</div>

<Footer/>
</div>
  );
}

export default Project;

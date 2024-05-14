import './App.css';
import Topbar from './Topbar';
import Footer from './Footer';

function Project() {
return (
<div>
  <Topbar/>
  <h1 className="head">My Recent Works</h1> 

  <div className="container">
  <div className="row g-8">
    <div className="col-md-6">
      <img style={{margin:"80px 15px"}} src="/images/airbnb.png" alt="Icon" className="img" width="480" height="350"/> 
    </div>
    <div className="col-md-6">
        <a  className="head btn btn-link">Airbnb Clone</a>
        <p>I have created this website for Homestay reserving. This website is basically the frontend and backend clone which is created with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express JS, NodeJS and MongoDB. Airbnb is Air Bed and Breakfast. This website operates an online marketplace focused on short-term homestays and experiences. Also Razorpay Payment Gateway implemented to pay for reservertionof homestay.</p>    
        <a href="https://github.com/mogana26596/Airbnb-frontend" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Airbnb clone - Frontend</a>
        <a href="https://github.com/mogana26596/Airbnb-backend" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Airbnb clone - Backend</a>
        <a href="https://airbnbclonenode.netlify.app/"className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Airbnb clone - Deployed URL</a> 
    </div>
  </div>
</div>

<div className="container">
  <div className="row g-8">
    <div className="col-md-6">
      <img style={{margin:"110px 15px"}} src="/images/library.jpg" className="img" alt="..." width="480" height="310"/>
    </div>
    <div className="col-md-6">
    <a  className="head btn btn-link">Library Management Clone</a>
    <p>I have created this website to manage the movement of books and maintain records of the members in a library using formik. This website is basically the frontend and backend clone which is created with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express JS, NodeJS and MongoDB. In this project, admin and admin allowed librarian only should access this software.</p>    
    <a href="https://github.com/mogana26596/libraryreact" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Library Management clone - Frontend</a>
        <a href="https://github.com/mogana26596/librarynodejs" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Library Management clone - Backend</a> 
        <a href="https://librarymanagementclone.netlify.app/" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Library Management clone - Deployed URL</a> 
    </div>
  </div>
</div>

<div className="container">
  <div className="row g-8">
    <div className="col-md-6">
      <img style={{margin:"110px 15px"}} src="/images/weather.png" className="img" alt="..." width="480" height="310"/>
    </div>
    <div className="col-md-6">
    <a  className="head btn btn-link">Weather Application</a>
    <p>I have created this website to provide the real-time weather information to the user for the city they have searched. If the user searches, for the wrong city, an Error message is also displayed to the user, stating that the searched city is not found. We have used OpenWeatherMap API which provides us with access to weather data from around the world. We have fetched the weather information for various locations, including wind speed and more. This website is basically the frontend clone which is created with HTML, CSS, JavaScript and ReactJS.</p>    
    <a href="https://github.com/mogana26596/weather-app" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Weather Application</a>
        <a href="https://weatherforecastreactapp.netlify.app/" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Weather Application - Deployed URL</a> 
    </div>
  </div>
</div>

  <div className="container">
  <div className="row g-8">
    <div className="col-md-6">
       <img style={{margin:"120px 15px"}} src="/images/StackOverflow.png" className="img" alt="..." width="480" height="310"/>
    </div>
    <div className="col-md-6">
        <a className="head btn btn-link" target="_blank">Stack overflow clone</a>
        <p>I have created this website for Hackathon. This website is basically the frontend and backend clone which is created with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express JS, NodeJS and MongoDB . This website  is a question and answer website. It features questions and answers on a wide range of topics in computer programming.</p>    
        <a href="https://github.com/mogana26596/webcodereact" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Stack overflow clone - Frontend</a>
        <a href="https://github.com/mogana26596/webcodenodejs" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Stack overflow clone - Backend</a> 
        <a href="https://stackoverflowclone11.netlify.app/" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">Stack overflow clone - Deployed URL</a> 
    </div>
  </div>
</div>

<div className="container">
  <div className="row g-8">
    <div className="col-md-6">
      <img style={{margin:"110px 15px"}} src="/images/school.jpg" className="img" alt="..." width="480" height="310"/>
    </div>
    <div className="col-md-6">
    <a className="head btn btn-link" target="_blank">School Management Clone</a>
    <p>I have created this website to record School students and teacher details. This website is basically the frontend and backend clone which is created with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express JS, NodeJS and MongoDB. In this project, admin only should access this software.</p>    
    <a href="https://github.com/mogana26596/userreact" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">School Management clone - Frontend</a>
        <a href="https://github.com/mogana26596/usernodejs" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">School Management clone - Backend</a> 
        <a href="https://schoolmanagement11.netlify.app/" className="btn btn-primary d-md-flex justify-content-md-center" target="_blank">School Management clone - Deployed URL</a> 
    </div>
  </div>
</div>

<Footer/>
</div>
  );
}

export default Project;

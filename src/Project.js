import './App.css';
import Topbar from './Topbar';
import Footer from './Footer';

function Project() {
return (
<div>
  <Topbar/>
  <h1 className="head text-center">My Recent Works</h1> 

  <div className="container">
  <div className="row g-8">
    <div className="col-md-6">
      <img style={{margin:"80px 15px"}} src="/images/homestay.jpg" alt="Icon" className="img" width="480" height="350"/> 
    </div>
    <div className="col-md-6">
        <p className="head">HomeStaybnb Clone</p>
        <p>I have created this website for Homestay reserving. This website is basically the frontend and backend clone which is created with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express JS, NodeJS and MongoDB. HomeStaybnb is HomeStay Bed and Breakfast. This website operates an online marketplace focused on short-term homestays and experiences. Also Razorpay Payment Gateway implemented to pay for reservertion.</p>    
        <a href="https://github.com/mogana26596/homestayreact" className="btn btn-secondary d-md-flex justify-content-md-center" target="_blank">HomeStaybnb clone - Frontend</a>
        <a href="https://github.com/mogana26596/homestaynode" className="btn btn-secondary d-md-flex justify-content-md-center" target="_blank">HomeStaybnb clone - Backend</a>
        <a href="https://homestaybnb.netlify.app/"className="btn btn-secondary d-md-flex justify-content-md-center" target="_blank">HomeStaybnb clone - Deployed URL</a> 
    </div>
  </div>
</div>

<div className="container">
  <div className="row g-8">
    <div className="col-md-6">
      <img style={{margin:"110px 15px"}} src="/images/library.jpg" className="img" alt="..." width="480" height="310"/>
    </div>
    <div className="col-md-6">
    <p className="head">Library Management Clone</p>
    <p>I have created this website to manage the movement of books and maintain records of the members in a library using formik. This website is basically the frontend and backend clone which is created with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express JS, NodeJS and MongoDB. In this project, admin and admin allowed librarian only should access this software.</p>    
    <a href="https://github.com/mogana26596/libraryreact" className="btn btn-secondary d-md-flex justify-content-md-center" target="_blank">Library Management clone - Frontend</a>
        <a href="https://github.com/mogana26596/librarynodejs" className="btn btn-secondary d-md-flex justify-content-md-center" target="_blank">Library Management clone - Backend</a> 
        <a href="https://librarymanagementclone.netlify.app/" className="btn btn-secondary d-md-flex justify-content-md-center" target="_blank">Library Management clone - Deployed URL</a> 
    </div>
  </div>
</div>

<div className="container">
  <div className="row g-8">
    <div className="col-md-6">
      <img style={{margin:"110px 15px"}} src="/images/weather.png" className="img" alt="..." width="480" height="310"/>
    </div>
    <div className="col-md-6">
    <p className="head">Weather Application</p>
    <p>I have created this website to provide the real-time weather information to the user for the city they have searched. If the user searches, for the wrong city, an Error message is also displayed to the user, stating that the searched city is not found. We have used OpenWeatherMap API which provides us with access to weather data from around the world. We have fetched the weather information for various locations, including wind speed and more. This website is basically the frontend clone which is created with HTML, CSS, JavaScript and ReactJS.</p>    
    <a href="https://github.com/mogana26596/weather-app" className="btn btn-secondary d-md-flex justify-content-md-center" target="_blank">Weather Application</a>
        <a href="https://weatherforecastreactapp.netlify.app/" className="btn btn-secondary d-md-flex justify-content-md-center" target="_blank">Weather Application - Deployed URL</a> 
    </div>
  </div>
</div>

  <div className="container">
  <div className="row g-8">
    <div className="col-md-6">
       <img style={{margin:"120px 15px"}} src="/images/onlinemarket.png" className="img" alt="..." width="480" height="310"/>
    </div>
    <div className="col-md-6">
        <p className="head">Online fruits and Vegetables market shop</p>
        <p>I have created this website for sell the fresh fruits and vegetables online. This website is basically the frontend and backend clone which is created with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express JS, NodeJS and Mongoose MongoDB . In this website, selling farm fresh fruits and vegetables online at the best prices.</p>    
        <a href="https://github.com/mogana26596/onlineshopfrontend" className="btn btn-secondary d-md-flex justify-content-md-center" target="_blank">Online fruits and Vegetables market shop - Frontend</a>
        <a href="https://github.com/mogana26596/onlineshoppingbackend" className="btn btn-secondary d-md-flex justify-content-md-center" target="_blank">Online fruits and Vegetables market shop - Backend</a> 
        <a href="https://onlineshoppinmarket.netlify.app/" className="btn btn-secondary d-md-flex justify-content-md-center" target="_blank">Online fruits and Vegetables market shop - Deployed URL</a> 
    </div>
  </div>
</div>

<div className="container">
  <div className="row g-8">
    <div className="col-md-6">
      <img style={{margin:"110px 15px"}} src="/images/school.jpg" className="img" alt="..." width="480" height="310"/>
    </div>
    <div className="col-md-6">
    <p className="head">School Management Clone</p>
    <p>I have created this website to record School students and teacher details. This website is basically the frontend and backend clone which is created with HTML, CSS, JavaScript, Bootstrap, ReactJS, Express JS, NodeJS and MongoDB. In this project, admin only should access this software.</p>    
    <a href="https://github.com/mogana26596/schoolreact" className="btn btn-secondary d-md-flex justify-content-md-center" target="_blank">School Management clone - Frontend</a>
        <a href="https://github.com/mogana26596/schoolnodejs" className="btn btn-secondary d-md-flex justify-content-md-center" target="_blank">School Management clone - Backend</a> 
        <a href="https://schoolmanagement111.netlify.app/" className="btn btn-secondary d-md-flex justify-content-md-center" target="_blank">School Management clone - Deployed URL</a> 
    </div>
  </div>
</div>

<Footer/>
</div>
  );
}

export default Project;

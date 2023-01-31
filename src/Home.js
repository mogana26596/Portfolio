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
        <h1>Hi There!👋🏻</h1>
        <h1>I'M <span>MOGANA</span></h1>
        <h1><span>FULL-STACK WEB DEVELOPER</span></h1>
      </div>
      <div className="col-6">
         <img src="https://www.sardonyx.in/themes/images/software-development/sardonyx-softwaredevelopment001.gif" alt="" className= "image" width="650" height="550"/>
      </div>
    </div> 
  </div>

  <div className="container">
    <div className="row">
       <div className="col-6">
         <img src="https://d2btv6z6utd61g.cloudfront.net/wp-content/uploads/2020/01/full-stack-bnr.png" alt="" className= "image" width="450" height="400"/>
      </div>
      <div className="col-6">
       <p className="head">LET ME INTRODUCE MYSELF</p>
       <p> I'm Programmer that turns coffee into code.😉</p>
       <p>I am fluent in classNameics like <span>C++, C, Javascript.</span></p>
       <p>My field of Interest's are building new <span>Web Technologies</span> and areas related to <span>Digital Marketing.</span></p>
       <p>Whenever possible, I also apply my passion for developing products with <span>Javascript Frameworks</span> like <span>Node.js and React.js.</span></p>
      </div>
     
    </div> 
  </div>
<Footer/>
</div>
  );
}

export default Home;

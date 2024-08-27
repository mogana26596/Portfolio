import './App.css';
import {useNavigate} from 'react-router-dom';

function Topbar() {
const navigate = useNavigate();
const Home = async () => {
 navigate('/');
};
const About = async () => {
  navigate('/about');
 };
 const Project = async () => {
  navigate('/project');
 };
 const Resume = async () => {
  navigate('/resume');
 };
return (
<div>
  <nav className="navbar">
  <div className="container-fluid justify-content-end">
        <button type="button" className="btn btn-light" onClick={Home}><i className="fa fa-home" aria-hidden="true"></i> Home</button>
        <button type="button" className="btn btn-light" onClick={About}><i className="fa fa-user-o" aria-hidden="true"></i> About</button>
        <button type="button" className="btn btn-light" onClick={Project}><i className="fa fa-laptop" aria-hidden="true"></i> Projects</button>
        <button type="button" className="btn btn-light" onClick={Resume}><i className="fa fa-file-word-o" aria-hidden="true"></i> Resume</button>
  </div>
  </nav>
</div>
  );
}

export default Topbar;
